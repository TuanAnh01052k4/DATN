import { useQuery } from "@tanstack/react-query";
import instance from "../../config/axios";

const useColorQuery = () => {
  const query = useQuery({
    queryKey: ["COLORS"],
    queryFn: async () => {
      try {
        const res = await instance.get("/colors");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return query;
};

export default useColorQuery;
