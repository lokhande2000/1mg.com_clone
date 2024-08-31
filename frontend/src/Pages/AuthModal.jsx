import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Input,
    FormControl,
    FormLabel,
    useDisclosure,
    Text,
    Link,
    HStack,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  
  const AuthModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Registration
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication
    const [login, setLogin] = useState({
      email: "",
      password: "",
    });
    const [register, setRegister] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const [errors, setErrors] = useState({
      emailError: "",
      passwordError: "",
      usernameError: "",
      confirmPasswordError: "",
    });
    const [alert, setAlert] = useState({
      isVisible: false,
      type: "", // "success" or "error"
      message: "",
    });
  
    // useEffect(() => {
    //   if (login.email === "" && !isLogin) {
    //     setIsLogin(false);
    //   } else {
    //     onOpen();
    //   }
    // }, [login.email, onOpen, isLogin]);
  
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
    const validatePassword = (password) => {
      return password.length >= 8 && password.length <= 16;
    };
  
    const validateForm = () => {
      let valid = true;
      let errors = {};
  
      if (isLogin) {
        if (!validateEmail(login.email)) {
          errors.emailError = "Invalid email address";
          valid = false;
        }
        if (!validatePassword(login.password)) {
          errors.passwordError = "Password must be 8-16 characters";
          valid = false;
        }
      } else {
        if (!register.username) {
          errors.usernameError = "Username is required";
          valid = false;
        }
        if (!validateEmail(register.email)) {
          errors.emailError = "Invalid email address";
          valid = false;
        }
        if (!validatePassword(register.password)) {
          errors.passwordError = "Password must be 8-16 characters";
          valid = false;
        }
        if (register.password !== register.confirmPassword) {
          errors.confirmPasswordError = "Passwords do not match";
          valid = false;
        }
      }
      setErrors(errors);
      return valid;
    };
  
    const handleLoginChange = (e) => {
      const { name, value } = e.target;
      setLogin({ ...login, [name]: value });
    };
  
    const handleRegisterChange = (e) => {
      const { name, value } = e.target;
      setRegister({ ...register, [name]: value });
    };
  
    const toggleAuthMode = () => {
      setIsLogin(!isLogin);
    };
  
    const handleFormSubmit = () => {
      if (validateForm()) {
        if (isLogin) {
          // Simulate a successful login
          setAlert({
            isVisible: true,
            type: "success",
            message: "Login successful!",
          });
          setIsAuthenticated(true);
          setTimeout(() => {
            setAlert({ ...alert, isVisible: false });
            onClose();
          }, 2000); // Close modal after 2 seconds
        } else {
          // Simulate a successful registration
          setAlert({
            isVisible: true,
            type: "success",
            message: "Registration successful! Redirecting to login...",
          });
          setTimeout(() => {
            setIsLogin(true);
            setAlert({ ...alert, isVisible: false });
            onClose();
          }, 2000); // Close modal after 2 seconds
        }
      }
    };
  
    const handleLogout = () => {
      setIsAuthenticated(false);
      // Optionally clear user-related state or data
    };
  
    const openLoginModal = () => {
      setIsLogin(true);
      onOpen();
    };
  
    const openRegistrationModal = () => {
      setIsLogin(false);
      onOpen();
    };
  
    return (
      <div>
        {isAuthenticated ? (
          <Link onClick={handleLogout} colorScheme="red">
            Logout
          </Link>
        ) : (
          <HStack>
            <Link
              _hover={{ textDecoration: "none" }}
              onClick={openLoginModal}
              colorScheme="blue"
            >
              Login
            </Link>
            <Text>|</Text>
            <Link
              _hover={{ textDecoration: "none" }}
              onClick={openRegistrationModal}
              colorScheme="green"
            >
              Register
            </Link>
          </HStack>
        )}
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{isLogin ? "Login" : "Registration"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {alert.isVisible && (
                <Alert
                  status={alert.type}
                  variant="subtle"
                  mb={4}
                  borderRadius="md"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <AlertIcon />
                  <AlertTitle>
                    {alert.type === "success" ? "Success" : "Error"}
                  </AlertTitle>
                  <AlertDescription>{alert.message}</AlertDescription>
                  <CloseButton
                    position="absolute"
                    right="8px"
                    top="8px"
                    onClick={() => setAlert({ ...alert, isVisible: false })}
                  />
                </Alert>
              )}
              {!isLogin && (
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={register.username}
                    onChange={handleRegisterChange}
                  />
                  {errors.usernameError && (
                    <Text color="red.500">{errors.usernameError}</Text>
                  )}
                </FormControl>
              )}
  
              <FormControl mt={4}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={isLogin ? login.email : register.email}
                  onChange={isLogin ? handleLoginChange : handleRegisterChange}
                />
                {errors.emailError && (
                  <Text color="red.500">{errors.emailError}</Text>
                )}
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={isLogin ? login.password : register.password}
                  onChange={isLogin ? handleLoginChange : handleRegisterChange}
                />
                {errors.passwordError && (
                  <Text color="red.500">{errors.passwordError}</Text>
                )}
              </FormControl>
  
              {!isLogin && (
                <>
                  <FormControl mt={4}>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={register.confirmPassword}
                      onChange={handleRegisterChange}
                    />
                    {errors.confirmPasswordError && (
                      <Text color="red.500">{errors.confirmPasswordError}</Text>
                    )}
                  </FormControl>
                </>
              )}
            </ModalBody>
  
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleFormSubmit}
                isDisabled={Object.values(errors).some(error => error)}
              >
                {isLogin ? "Login" : "Register"}
              </Button>
              <Button variant="ghost" onClick={toggleAuthMode}>
                {isLogin
                  ? "Don't have an account? Register"
                  : "Already have an account? Login"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  };
  
  export default AuthModal;
  