"use client";
import DashboardLoading from "@/components/DashboardLoading";
import React, { Suspense } from "react";

export default function Loading({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<DashboardLoading />}>{children}</Suspense>;
}
