import React from "react";

export default function layout({
  children,
  users,
  settings,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  settings: React.ReactNode;
}) {
  return (
    <div className="w-screen">
      <section>{children}</section>
      <div className="w-full flex p-20 gap-12">
        <section className="bg-red-300">{users}</section>
        <section className="bg-green-300">{settings}</section>
      </div>
    </div>
  );
}
