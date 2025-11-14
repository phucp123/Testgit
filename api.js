// Hàm bất đồng bộ lấy dữ liệu từ API
export async function getPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return data;
}
