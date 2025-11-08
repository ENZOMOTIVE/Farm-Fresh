import DashboardLayout from "../dashboard/layout";

export default function ProfilePage() {
  return (
    <div>
      <DashboardLayout>
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-2 text-gray-600">View and edit your profile details here.</p>
    </DashboardLayout>
    </div>
  );
}
