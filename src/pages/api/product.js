import { ProductsDatas } from "@/Data/data";

export default function handler(req, res) {
    res.status(200).json(ProductsDatas)
  }
  