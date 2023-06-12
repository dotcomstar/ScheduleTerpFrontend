import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../services/api-client";

export interface SearchResult {
  name: string;
  slug: string;
  type: "course" | "professor";
}

const useSearch = (inputValue: string) =>
  useQuery<SearchResult[], Error>({
    queryKey: ["query", inputValue],
    queryFn: () =>
      apiClient
        .get<SearchResult[]>("/search", {
          params: {
            limit: 5,
            query: inputValue,
          },
        })
        .then((res) =>
          (res.data || []).filter(({ type }) => type === "course")
        ),
    // only fetch search terms longer than 2 characters
    enabled: inputValue.length > 2,
    staleTime: 10 * 1000,
  });

export default useSearch;
