type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(initialValues: T) {
  // reloed value user
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
