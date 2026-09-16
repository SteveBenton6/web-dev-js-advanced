function greetUser(greetingPrefix, userName = "user") {
  console.log(`${greetingPrefix} there, ${userName}!`);
}

greetUser("Hi", "Steve");
greetUser("Hello");
