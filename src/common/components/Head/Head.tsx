import Head from "next/head";
import { FC } from "react";

type HeadProps = {
  title?: string;
  description?: string;
  iconLink?: string;
};

const CustomHead: FC<HeadProps> = ({ title, description, iconLink }) => (
  <Head>
    <title>{title || "LibraMate"}</title>
    <meta name="description" content={description || "Book organizing tool"} />
    <link rel="icon" href={iconLink || "/favicon.ico"} />
  </Head>
);

export default CustomHead;
