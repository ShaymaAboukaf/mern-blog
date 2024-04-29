export async function signup({ username, email, password }) {
  try {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
