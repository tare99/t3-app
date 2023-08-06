import { Listing } from "@prisma/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function Home() {
  const router = useRouter();
  const listing = api.listings.get.useQuery(
    {
      listingId: router.query.id as string,
    },
    {
      enabled: !!router.query.id,
    }
  );

  return (
    <>
      <Head>
        <title>View Listing</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gray-800 bg-gradient-to-b text-white">
        <div className="container mx-auto flex flex-col gap-12">
          <h1 className="mb-12 mt-12 text-4xl text-white">
            {listing.data?.name}
          </h1>
          <p>{listing.data?.description}</p>
          <p>$ {listing.data?.price}</p>
        </div>
      </main>
    </>
  );
}
