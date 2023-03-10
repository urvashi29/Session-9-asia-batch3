import axios from "axios";
import { fetchPosts } from "./utils";

jest.mock("axios");

describe("fetch posts data", () => {
  describe("when api call is success", () => {
    it("should return list",
      async () => {
        // given
        const posts = [
          {
            userId: 1,
            id: 1,
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          },
        ];
        axios.get.mockResolvedValueOnce(posts);

        // when
        const result = await fetchPosts();

        // then

        expect(axios.get).toHaveBeenCalledWith(
          "https://jsonplaceholder.typicode.com/posts/"
        );
        expect(result).toEqual(posts);
      })
  });
});
