import { auth } from "@/lib/user/auth";

const ProfilePage = async () => {
  const session = await auth();
  const user = session!.user!;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg my-6">
      <div className="border-b px-4 py-6">
        <div className="text-center my-4">
          <div className="w-32 h-32 bg-stonedark rounded-full mx-auto mb-6"></div>
          <h1 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
            {user.name}
          </h1>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
