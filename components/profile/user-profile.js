import { useRouter } from "next/router"; // Import useRouter
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  const router = useRouter(); // Initialize useRouter

  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Ensure cookies are sent
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data.message || "Something went wrong!");
      alert(data.message || "Something went wrong!"); // Show error message
      return;
    }

    alert("Password changed successfully!"); // Show success message

    // Redirect to the homepage
    router.replace("/");
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
