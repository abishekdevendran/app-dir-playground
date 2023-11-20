import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Search from '@/app/ui/search';
import React, { Suspense } from 'react';
import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table';
import { fetchFilteredInvoices } from '@/app/lib/data';

const SearchWrapper = async ({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) => {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  return (
    <>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      {(Math.ceil(Number(invoices[0]?.total_count) / 6) ?? 0) > 0 ? (
        <>
          <Table invoices={invoices} />
          <div className="mt-5 flex w-full justify-center">
            <Pagination
              totalPages={Math.ceil(Number(invoices[0]?.total_count) / 6) ?? 1}
            />
          </div>
        </>
      ) : (
        <div className="mt-5 flex w-full justify-center">
          <h1 className="text-2xl">No invoices found.</h1>
        </div>
      )}
    </>
  );
};

export default SearchWrapper;
