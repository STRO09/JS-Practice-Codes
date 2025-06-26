// Show an example of a finally block that executes when updating customer profile information, regardless of whether the operation was successful or resulted in an error.

function updateProfile(profile) {
  try {
    if (!profile.name || !profile.email) {
      throw new Error("Invalid profile data");
    }
    console.log("Profile updated successfully for:", profile.name);
  } catch (error) {
    console.log("Profile update failed:", error.message);
  } finally {
    console.log("Update attempt completed.");
  }
}

const a = { name: "Sagar", email: "sagar@example.com" };
const b = { name: "Sagar" };

updateProfile(a);
updateProfile(b);
