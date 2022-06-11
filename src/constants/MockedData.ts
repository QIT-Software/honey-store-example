import { Product } from "@/types/Products";
import { Catalog } from "@/types/Catalogs";

export const mockCatalogs: Catalog[] = [
  {
    id: 1,
    slug: "canadian",
    name: "Canadian honey",
  },
  {
    id: 2,
    slug: "asian",
    name: "Asian honey",
  },
  {
    id: 3,
    slug: "european",
    name: "European honey",
  },
  {
    id: 4,
    slug: "italian",
    name: "Italian honey",
  },
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Clover Honey",
    catalog_id: 1,
    price: 150,
    description:
      "Saturated with the aromatic, mild flavor of clover blossoms, clover honey is the best-known honey variety with the largest annual production. Grown in Canada, the United States, Sweden, and New Zealand, this popular honey has a sweet, mild taste with a hint of cinnamon and a light golden color.  \n" +
      "\n" +
      "Although clover honey doesn't contain as many antioxidants as darker varieties (such as buckwheat and manuka), it's the perfect all-purpose honey to keep on hand in your establishment for all your tableside needs.",
  },
  {
    id: 2,
    name: "Wildflower Honey",
    catalog_id: 2,
    price: 20,
    description:
      "Wildflower honey features a select blend of wild blossoms and flowers. Because wildflower honey is collected from any variety of wildflowers depending on the season and region that they're in bloom, it may originate from any country that grows honey.\n" +
      "\n" +
      "Its taste varies depending on the flowers it is created from. However, it's typically slightly darker than other honey varieties, adding a robust flavor to baking recipes.",
  },
  {
    id: 3,
    name: "Acacia Honey",
    catalog_id: 3,
    price: 60,
    description:
      'Acacia honey is created with the nectar from black locust trees, also known as false acacia tress. For this reason, it is sometimes sold as "locust honey" in the United States. The honey features a sweet, delicate flavor with a hint of vanilla and a light, almost transparent color.\n' +
      "\n" +
      "Likely due to its higher fructose content, acacia honey takes longer to crystallize. As a result, acacia honey is a great choice for smaller establishments that may take a long time to finish a jar of honey. ",
  },
  {
    id: 4,
    name: "Alfalfa Honey",
    catalog_id: 4,
    price: 500,
    description:
      "Largely produced in the United States and Canada, the alfalfa honey variety is created with nectar from bright purple alfalfa blossoms. The final product is a light, herbal flavored honey with delicate, mildly sweet undertones.\n" +
      "\n" +
      "Alfalfa's smooth texture and mild taste are akin to clover honey. Because Alfalfa is slightly less sweet, however, it is more ideally used for cooking applications. Add it to pastries and breads as a healthy alternative to sugar. ",
  },
  {
    id: 5,
    name: "Buckwheat Honey",
    catalog_id: 2,
    price: 140,
    description:
      "Dark and bold, buckwheat honey is collected fresh from the small white blossoms of the buckwheat grain. It's grown in the United States, France, Canada, Japan, and the Netherlands.\n" +
      "\n" +
      "Typically compared to blackstrap molasses, this honey variety is characterized by an earthy aroma and a rich amber color. It has a stronger and heartier taste than lighter honey varieties, and it's also higher in antioxidants. \n" +
      "\n" +
      "Because of its bold flavors, buckwheat honey is best used for baking and cooking. Products baked with this golden honey will dry out less quickly and be less likely to crack than those baked with traditional sugar. ",
  },
  {
    id: 6,
    name: "Creamed Honey",
    catalog_id: 3,
    price: 800,
    description:
      "While it's not technically a type of honey, creamed honey denotes a special way of preparing honey. Also known as spun honey, it is made by storing honey at a temperature of around 55 degrees Fahrenheit and letting it crystallize. Creamed honey has a richer, creamier texture than traditional honey. It also typically has a much lighter color than liquid honey from the same flower. \n" +
      "\n" +
      "The crystals in creamed honey create a smooth and easily spreadable product. It's a great addition to breakfast spread offerings and adds interest to any menu. ",
  },
];
