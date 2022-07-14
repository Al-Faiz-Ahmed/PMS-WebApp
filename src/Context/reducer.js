import {
  MOBILE_DEVICE_SEARCHING_START,
  MOBILE_DEVICE_SEARCHING_STOP,
  MOBILE_SIDEBAR_SLIDE_DEFAULT,
  MOBILE_SIDEBAR_SLIDE_OFF,
  MOBILE_SIDEBAR_SLIDE_ON,
  PAGE_NAVIGATOR,
  SAVE_DATA_FROM_BACKEND,
  SEARCHING_START,
  UPDATE_DATA,
  USER_LOGIN,
  USER_LOGOUT,
} from "./types";

export let initialState = {
  AuthenticUser: {
    User: false,
  },
  ComponentControl: {
    searchedValue: "",
    tab: "home",
    mobileSearchButtonDefault: false,
    mobileSideBar: "",
  },
};
function filterData(state, action) {
  let topUsedServices = [];
  const categorySorting = () => {
    var sumAllPasswords = 0;
    // sum of all Passwords Saved in Database
    action.payload.categories.filter((data, index) => {
      const numm = action.payload.categories[index].hashes.length;
      sumAllPasswords = sumAllPasswords + numm;
    });
    action.payload.categories.filter((data, index) => {
      const numm = action.payload.categories[index].hashes.length;
      const percentage = Math.round((numm / sumAllPasswords) * 100);
      data.percentage = percentage;
      topUsedServices.push(data);
    });

    topUsedServices.sort((a, b) => {
      return a.percentage - b.percentage;
    });
    topUsedServices.reverse();
    return topUsedServices;
  };
  const searchList = () => {
    let searchWordsList = [];
    action.payload.categories.map((data) => {
      const searchWords = data.categoryName.toLowerCase();
      searchWordsList.push(searchWords);
    });
    return searchWordsList;
  };
  return {
    ...state,
    AppData: {
      initialData: action.payload.categories,
      filterData: categorySorting(),
      searchWords: searchList(),
    },
  };
}

let updateData = (updateArray, payloadValue) => {
  updateArray.filter((data) => {
    if (data.categoryName === payloadValue.categoryName) {
      data.hashes[payloadValue.indexNumber].userName = payloadValue.userName;
      data.hashes[payloadValue.indexNumber].debian = payloadValue.password;
    }
  });
  return updateArray;
};

export function reducer(state, action) {
  switch (action.type) {
    case MOBILE_DEVICE_SEARCHING_START:
      return {
        ...state,
        ComponentControl: {
          ...state.ComponentControl,
          mobileSearchButtonDefault: true,
        },
      };
    case MOBILE_DEVICE_SEARCHING_STOP:
      return {
        ...state,
        ComponentControl: {
          ...state.ComponentControl,
          mobileSearchButtonDefault: false,
          searchedValue: "",
        },
      };
    case MOBILE_SIDEBAR_SLIDE_DEFAULT:
      return {
        ...state,
        ComponentControl: {
          ...state.ComponentControl,
          mobileSideBar: "",
        },
      };
    case MOBILE_SIDEBAR_SLIDE_OFF:
      return {
        ...state,
        ComponentControl: {
          ...state.ComponentControl,
          mobileSideBar: "default",
        },
      };
    case MOBILE_SIDEBAR_SLIDE_ON:
      return {
        ...state,
        ComponentControl: {
          ...state.ComponentControl,
          mobileSideBar: "active",
        },
      };
    case SAVE_DATA_FROM_BACKEND:
      return filterData(state, action);

    case UPDATE_DATA:
      var initialUpdatedData = updateData(
        state.AppData.initialData,
        action.payload
      );
      var filterUpdatedData = updateData(
        state.AppData.filterData,
        action.payload
      );
      return {
        ...state,
        AppData: {
          ...state.AppData,
          initialData: initialUpdatedData,
          filterData: filterUpdatedData,
        },
      };
    case SEARCHING_START:
      return {
        ...state,
        ComponentControl: {
          ...state.ComponentControl,
          searchedValue: action.payload,
        },
      };
    case PAGE_NAVIGATOR:
      return {
        ...state,
        ComponentControl: {
          ...state.ComponentControl,
          tab: action.payload,
        },
      };
    case USER_LOGIN:
      return {
        ...state,
        AuthenticUser: {
          User: true,
        },
      };
    case USER_LOGOUT:
      return {
        AuthenticUser: {
          User: false,
        },
        ComponentControl: {
          searchedValue: "",
          tab: "home",
          mobileSearchButtonDefault: false,
          mobileSideBar: "",
        },
      };
    default:
      return state;
  }
}
