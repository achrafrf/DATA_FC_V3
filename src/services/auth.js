import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Laravel backend
  withCredentials: true, // مهم لـ Sanctum
});

// تسجيل
export async function register(data) {
  return await api.post("/register", data);
}

// تسجيل دخول
export async function login(data) {
  return await api.post("/login", data);
}

// تسجيل خروج
export async function logout() {
  return await api.post("/logout");
}

// جلب المستخدم
export async function getUser() {
  return await api.get("/api/user");
}