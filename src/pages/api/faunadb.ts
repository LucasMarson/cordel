import { client, q } from "@/servcies/fauna";
interface Card {
    title: string;
    content: string;
  }
  
  interface GetAllCardsResult {
    data: Array<Card>;
  }
  
  export default async function getAllCards(): Promise<GetAllCardsResult> {
    try {
      const result = await client.query(
        q.Map(
          q.Paginate(
            q.Match("allCards"),
            { size: 100 }
          ),
          q.Lambda("x", q.Select(["data"], q.Get(q.Var("x"))))
        )
      );
      return result as GetAllCardsResult;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  