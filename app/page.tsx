"use client";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CirclePlus, Crown } from "lucide-react";
import InvoiceSection from "./components/InvoiceSection";
import IncomeChart from "./components/IncomeChart";
import TimePeriod from "./components/TimePeriod";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="p-4 space-y-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-medium">Dashboard</h1>
      <div className="bg-gray-100 rounded-2xl flex flex-col items-center justify-between p-8 cursor-pointer hover:bg-gray-200 transition">
        {/* <CirclePlus className="w-10 h-10 mb-3 text-indigo-500" /> */}
        <Image
          src="/Vector.svg"
          alt="Create Invoice"
          width={40}
          height={40}
          className="mb-3"
        />
        <span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Create New Invoice
        </span>
        <p className="text-gray-500 mt-2 text-center">
          Start by creating and sending a new invoice
        </p>
      </div>
      <div className="text-center">
        <p className="text-purple-500">
          Or Upload an existing invoice and set payment reminder
        </p>
      </div>
      {/* Time Period */}
      <div>
        <TimePeriod />
      </div>
      {/* Payments */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <CardTitle className="text-gray-500">Payment Awaited</CardTitle>
          <p className="text-2xl font-semibold text-purple-500">$25,230</p>
        </Card>
        <Card className="p-4">
          <CardTitle className="text-gray-500">Payment Overdue</CardTitle>
          <p className="text-2xl font-semibold text-purple-500 mb-5">$25,300</p>
        </Card>
      </div>
      {/* Income Trend Chart */}
      <div>
        <IncomeChart />
      </div>
      {/* Your Invoice */}
      <div>
        <InvoiceSection />
      </div>
    </div>
  );
}
