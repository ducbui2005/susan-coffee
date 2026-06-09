export default function UpdateProduct(){
    return(
           <div class="content">
      <div class="card shadow">
        <div class="card-body">
          <h4 class="card-title mb-4"> Sửa sản phẩm</h4>
          <form>
            <div class="mb-3">
              <label htmlFor="productName" class="form-label">Tên sản phẩm</label>
              <input
                type="text"
                class="form-control"
                id="productName"
                placeholder="Nhập tên sản phẩm"
                required
              />
            </div>
            <div class="row row-cols-2">
              <div class="mb-3">
                <label htmlFor="price" class="form-label">Giá (VNĐ)</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  placeholder="Nhập giá sản phẩm"
                  required
                />
              </div>
              <div class="mb-3">
                <label htmlFor="status" class="form-label">Trạng thái</label>
                <select class="form-select" id="status" required>
                  <option value="active">Đang bán</option>
                  <option value="inactive">Ngừng bán</option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label htmlFor="image" class="form-label">Ảnh sản phẩm</label>
              <input
                type="file"
                class="form-control"
                id="image"
                accept="image/*"
              />
            </div>
            <button type="submit" class="btn btn-dark">Lưu sản phẩm</button>
            <a href="admin-products.html" class="btn btn-outline-secondary">Hủy</a>
          </form>
        </div>
      </div>
    </div>
    )
}