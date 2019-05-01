import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_LOST, DELETE_LOST, UPDATE_LOST } from "./lostConstants";

const initialState = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg"
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

export const createLost = (state, payload) => {
  return [...state, Object.assign({}, payload.lost)];
};

export const updateLost = (state, payload) => {
  return [
    ...state.filter(lost => lost.id !== payload.event.id),
    Object.assign({}, payload.lost)
  ];
};

export const deleteLost = (state, payload) => {
  return [...state.filter(lost => lost.id !== payload.lostId)];
};

export default createReducer(initialState, {
  [CREATE_LOST]: createLost,
  [UPDATE_LOST]: updateLost,
  [DELETE_LOST]: deleteLost
});
