import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle title="Productos" subtitle="Administración de productos" />

        <div className="flex justify-end mb-10 gap-4">
          <Link to={"/admin/product/new"}>
            <Button>
              <PlusIcon />
              Nuevo Producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img
                src="https://placehold.co/250x250"
                alt="Product"
                className="w-20 h-20 object-cover rounded-md"
              />
            </TableCell>
            <TableCell>Product 1</TableCell>
            <TableCell>€250.000</TableCell>
            <TableCell>Categoría 1</TableCell>
            <TableCell>100 stock</TableCell>
            <TableCell>XS, S, L</TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/product/t-shirt-lermns`}>Editar</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CustomPagination totalPages={10} />
    </>
  );
};
