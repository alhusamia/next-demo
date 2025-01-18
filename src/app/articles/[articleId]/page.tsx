import Link from "next/link";

type Props = {
  params: Promise<{
    articleId: string;
  }>;
  searchParams: Promise<{
    lang?: "ar" | "en";
  }>;
};

// for server component we use asyn , on clint comp we use "use" from react like use(params) instead await

export default async function NewsArticle({ params, searchParams }: Props) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=ar`}>Arabic</Link>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
      </div>
    </div>
  );
}
