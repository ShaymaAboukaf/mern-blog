import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signin as signinApi } from "../services/authApi";
import { useNavigate } from "react-router-dom";

export function useSignin() {
  const navigate = useNavigate();
  const { mutate: signin, isPending } = useMutation({
    mutationFn: signinApi,
    onSuccess: () => {
      toast.success("You have been logged in successfully");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signin, isPending };
}
