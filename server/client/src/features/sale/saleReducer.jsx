import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_SALE, DELETE_SALE, UPDATE_SALE } from "./saleConstants";

const initialState = [
  {
    id: "1",
    title: "Bicycle",
    date: "2018-03-27",
    category: "Bicycle",
    price: "$20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    SoldBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    itemPhotoURL:
      "http://cdn.shopify.com/s/files/1/1245/1481/products/Hero_600_square2_1024x1024.jpg?v=1546547634"
    // attendees: [
    //   {
    //     id: "a",
    //     name: "Bob",
    //     photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
    //   },
    //   {
    //     id: "b",
    //     name: "Tom",
    //     photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
    //   }
    // ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg"
    // attendees: [
    //   {
    //     id: "b",
    //     name: "Tom",
    //     photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
    //   },
    //   {
    //     id: "a",
    //     name: "Bob",
    //     photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
    //   }
    // ]
  }
];

export const createSale = (state, payload) => {
  return [...state, Object.assign({}, payload.sale)];
};

export const updateSale = (state, payload) => {
  return [
    ...state.filter(sale => sale.id !== payload.sale.id),
    Object.assign({}, payload.sale)
  ];
};

export const deleteSale = (state, payload) => {
  return [...state.filter(sale => sale.id !== payload.saleId)];
};

export default createReducer(initialState, {
  [CREATE_SALE]: createSale,
  [UPDATE_SALE]: updateSale,
  [DELETE_SALE]: deleteSale
});
