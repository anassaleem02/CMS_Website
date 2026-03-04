import { Component, OnInit, HostListener } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product, ProductCategory, CreateProductDto, ProductImage } from '../../../core/models/product.model';
import { NotificationService } from '../../../core/services/notification.service';
import { MediaService } from '../../../core/services/media.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-admin-products',
  standalone: false,
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  loading = true;
  showForm = false;
  editingProduct: Product | null = null;
  deleteDialogVisible = false;
  productToDelete: Product | null = null;
  searchQuery = '';
  filterCategory: ProductCategory | '' = '';
  filterStatus: '' | 'active' | 'inactive' = '';

  selectedIds = new Set<number>();
  bulkDeleteDialogVisible = false;

  categories = [
    { label: 'All', value: '' },
    { label: 'Inverter', value: ProductCategory.Inverter },
    { label: 'Battery', value: ProductCategory.Battery },
    { label: 'Solar Panel', value: ProductCategory.SolarPanel },
    { label: 'Accessory', value: ProductCategory.Accessory }
  ];

  form: CreateProductDto = { name: '', shortDescription: '', description: '', category: ProductCategory.Inverter, isFeatured: false, isActive: true, displayOrder: 0 };
  saving = false;
  ProductCategory = ProductCategory;

  // Image management
  productImages: ProductImage[] = [];
  newImageUrl = '';
  newImageAlt = '';
  addingImage = false;
  uploadingImage = false;

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void { this.loadProducts(); }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    if ((e.ctrlKey || e.metaKey) && e.key === 's' && this.showForm) {
      e.preventDefault();
      this.saveProduct();
    }
    if (e.key === 'Escape' && this.showForm) { this.closeForm(); }
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getAllAdmin().subscribe({
      next: (products) => { this.products = products; this.applyFilters(); this.loading = false; },
      error: () => { this.notificationService.error('Failed to load products.'); this.loading = false; }
    });
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(p => {
      const matchSearch = !this.searchQuery || p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || p.shortDescription.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchCat = this.filterCategory === '' || p.category === Number(this.filterCategory);
      const matchStatus = this.filterStatus === '' || (this.filterStatus === 'active' ? p.isActive : !p.isActive);
      return matchSearch && matchCat && matchStatus;
    });
  }

  openCreate(): void {
    this.editingProduct = null;
    this.form = { name: '', shortDescription: '', description: '', category: ProductCategory.Inverter, isFeatured: false, isActive: true, displayOrder: this.products.length };
    this.showForm = true;
  }

  openEdit(product: Product): void {
    this.editingProduct = product;
    this.form = { name: product.name, shortDescription: product.shortDescription, description: product.description || '', category: product.category, isFeatured: product.isFeatured, isActive: product.isActive, displayOrder: product.displayOrder };
    this.productImages = [...(product.images || [])];
    this.newImageUrl = '';
    this.newImageAlt = '';
    this.showForm = true;
  }

  closeForm(): void { this.showForm = false; this.editingProduct = null; this.productImages = []; }

  saveProduct(): void {
    if (!this.form.name.trim()) { this.notificationService.error('Product name is required.'); return; }
    this.saving = true;
    const op = this.editingProduct
      ? this.productService.update(this.editingProduct.id, this.form)
      : this.productService.create(this.form);
    op.subscribe({
      next: (saved: Product) => {
        this.saving = false;
        if (this.editingProduct) {
          this.notificationService.success('Product updated!');
          this.closeForm();
          this.loadProducts();
        } else {
          // After creating, stay open in edit mode so images can be added immediately
          this.notificationService.success('Product created! You can now add images below.');
          this.products.push(saved);
          this.applyFilters();
          this.editingProduct = saved;
          this.productImages = [];
        }
      },
      error: () => { this.notificationService.error('Failed to save product.'); this.saving = false; }
    });
  }

  confirmDelete(product: Product): void { this.productToDelete = product; this.deleteDialogVisible = true; }

  onDeleteConfirmed(): void {
    if (!this.productToDelete) return;
    this.productService.delete(this.productToDelete.id).subscribe({
      next: () => { this.notificationService.success('Product deleted.'); this.loadProducts(); this.productToDelete = null; },
      error: () => this.notificationService.error('Failed to delete product.')
    });
  }

  duplicateProduct(product: Product): void {
    const dto: CreateProductDto = { name: product.name + ' (Copy)', shortDescription: product.shortDescription, description: product.description || '', category: product.category, isFeatured: false, isActive: false, displayOrder: this.products.length };
    this.productService.create(dto).subscribe({
      next: () => { this.notificationService.success('Product duplicated.'); this.loadProducts(); },
      error: () => this.notificationService.error('Failed to duplicate product.')
    });
  }

  toggleSelect(id: number): void { this.selectedIds.has(id) ? this.selectedIds.delete(id) : this.selectedIds.add(id); }
  toggleSelectAll(): void {
    if (this.selectedIds.size === this.filteredProducts.length) { this.selectedIds.clear(); }
    else { this.filteredProducts.forEach(p => this.selectedIds.add(p.id)); }
  }
  get allSelected(): boolean { return this.filteredProducts.length > 0 && this.selectedIds.size === this.filteredProducts.length; }

  bulkDelete(): void { if (this.selectedIds.size) this.bulkDeleteDialogVisible = true; }
  onBulkDeleteConfirmed(): void {
    const ids = Array.from(this.selectedIds);
    let done = 0;
    ids.forEach(id => {
      this.productService.delete(id).subscribe({ next: () => { done++; if (done === ids.length) { this.notificationService.success(`${ids.length} products deleted.`); this.selectedIds.clear(); this.loadProducts(); } } });
    });
  }

  exportCsv(): void {
    const headers = ['ID', 'Name', 'Category', 'Featured', 'Active', 'Display Order'];
    const rows = this.filteredProducts.map(p => [p.id, p.name, p.categoryName, p.isFeatured, p.isActive, p.displayOrder]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'products.csv'; a.click();
    URL.revokeObjectURL(url);
    this.notificationService.success('CSV exported!');
  }

  onDrop(event: CdkDragDrop<Product[]>): void {
    moveItemInArray(this.filteredProducts, event.previousIndex, event.currentIndex);
    const ids = this.filteredProducts.map(p => p.id);
    this.productService.reorder(ids).subscribe({ next: () => this.notificationService.success('Order saved.') });
  }

  getCategoryLabel(cat: ProductCategory): string {
    return ['', 'Inverter', 'Battery', 'Solar Panel', 'Accessory'][cat] || 'Unknown';
  }

  // --- Image management ---
  addImageByUrl(): void {
    if (!this.newImageUrl.trim() || !this.editingProduct) return;
    this.addingImage = true;
    const isPrimary = this.productImages.length === 0;
    this.productService.addImage(this.editingProduct.id, {
      imageUrl: this.newImageUrl.trim(),
      altText: this.newImageAlt.trim(),
      isPrimary,
      displayOrder: this.productImages.length
    }).subscribe({
      next: (img: ProductImage) => {
        this.productImages.push(img);
        if (isPrimary && this.editingProduct) {
          this.editingProduct.primaryImage = img;
        }
        this.newImageUrl = '';
        this.newImageAlt = '';
        this.addingImage = false;
        this.notificationService.success('Image added.');
        this.loadProducts();
      },
      error: () => { this.notificationService.error('Failed to add image.'); this.addingImage = false; }
    });
  }

  handleFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length || !this.editingProduct) return;
    const file = input.files[0];
    this.uploadingImage = true;
    this.mediaService.upload(file, 'product').subscribe({
      next: (media) => {
        const isPrimary = this.productImages.length === 0;
        this.productService.addImage(this.editingProduct!.id, {
          imageUrl: media.fileUrl,
          altText: file.name.replace(/\.[^.]+$/, ''),
          isPrimary,
          displayOrder: this.productImages.length
        }).subscribe({
          next: (img: ProductImage) => {
            this.productImages.push(img);
            if (isPrimary && this.editingProduct) {
              this.editingProduct.primaryImage = img;
            }
            this.uploadingImage = false;
            this.notificationService.success('Image uploaded and added.');
            this.loadProducts();
          },
          error: () => { this.notificationService.error('Failed to attach image.'); this.uploadingImage = false; }
        });
      },
      error: () => { this.notificationService.error('Upload failed.'); this.uploadingImage = false; }
    });
    input.value = '';
  }

  setThumbnail(img: ProductImage): void {
    if (!this.editingProduct || img.isPrimary) return;
    this.productService.setPrimaryImage(this.editingProduct.id, img.id).subscribe({
      next: () => {
        this.productImages.forEach(i => i.isPrimary = i.id === img.id);
        if (this.editingProduct) this.editingProduct.primaryImage = img;
        this.notificationService.success('Thumbnail set.');
        this.loadProducts();
      },
      error: () => this.notificationService.error('Failed to set thumbnail.')
    });
  }

  removeImage(img: ProductImage): void {
    if (!this.editingProduct) return;
    this.productService.deleteImage(this.editingProduct.id, img.id).subscribe({
      next: () => {
        this.productImages = this.productImages.filter(i => i.id !== img.id);
        if (this.editingProduct?.primaryImage?.id === img.id) {
          this.editingProduct.primaryImage = this.productImages.find(i => i.isPrimary) || this.productImages[0];
        }
        this.notificationService.success('Image removed.');
        this.loadProducts();
      },
      error: () => this.notificationService.error('Failed to remove image.')
    });
  }
}
