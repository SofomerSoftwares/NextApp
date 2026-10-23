import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-gray-50">
      <SideNav />
      {children}
    </div>
  );
}
