import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import SearchWrapper from '@/app/dashboard/invoices/searchWrapper';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
   const query = searchParams?.query || '';
   const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <SearchWrapper currentPage={currentPage} query={query}/>
      </Suspense>
    </div>
  );
}
