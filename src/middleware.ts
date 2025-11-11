import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // ✅ نحمي فقط مسار dashboard وكل ما تحته
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (isProtectedRoute(req) && !userId) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }
});

// ✅ لا نطبّق middleware إلا على هذه المسارات
export const config = {
  matcher: [
    "/dashboard(.*)", // فقط لوحة التحكم
  ],
};
