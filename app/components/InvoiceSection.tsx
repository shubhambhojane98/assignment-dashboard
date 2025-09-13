import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const invoices = [
  {
    id: "001",
    client: "Acme Corp",
    amount: 2500,
    due: "2025-06-09",
    status: "Paid",
  },
  {
    id: "002",
    client: "Globex Ltd",
    amount: 4200,
    due: "2025-07-15",
    status: "Overdue",
  },
  {
    id: "003",
    client: "Soylent Inc",
    amount: 6200,
    due: "2025-08-01",
    status: "Awaited",
  },
  {
    id: "004",
    client: "Initech",
    amount: 3000,
    due: "2025-08-20",
    status: "Dispute",
  },
];

const InvoiceSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Invoices</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-3">
          {invoices.map((invoice) => (
            <Card key={invoice.id} className="w-full p-4">
              <CardContent className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg text-gray-500">
                    {invoice.client}
                  </CardTitle>
                  <div className="flex items-center">
                    <p className="text-gray-600 font-semibold">
                      ${invoice.amount.toLocaleString()},
                    </p>
                    <p className="text-sm text-gray-500 px-1">
                      {" "}
                      Due: {invoice.due}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    className={
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : invoice.status === "Overdue"
                        ? "bg-red-100 text-red-700"
                        : invoice.status === "Awaited"
                        ? "bg-yellow-100 text-yellow-700"
                        : invoice.status === "Dispute"
                        ? "bg-red-100 text-red-500"
                        : "bg-blue-100 text-blue-500"
                    }
                  >
                    {invoice.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default InvoiceSection;
