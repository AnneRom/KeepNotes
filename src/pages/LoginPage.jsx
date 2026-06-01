import { LoginForm } from "../features/auth/components/LoginForm";
import { useNavigate } from "react-router-dom";
import { Button } from "../shared/ui/Button";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Сторінка входу</h1>
            <LoginForm />
            <Button onClick={() => navigate("/register")}> Register Page </Button>
        </div>
    );
};

export default LoginPage;