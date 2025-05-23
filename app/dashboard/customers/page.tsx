import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Customers',
};

interface PageProps {
  searchParams?: {
    query?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <CustomersTable customers={customers} />
    </div>
  );
}