import Vuex from "vuex";
import Cookie from "js-cookie";
const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
      merchantForms: {
        firstOne: false,
        secondOne: false,
        branches: []
      },
      merchantData: {
        name: "",
        phone: "",
        email: "",
        address: "",
        location: "",
        category: "",
        username: "",
        password: "",
        accountType: "",
        cover: "",
        contactPerson: {
          name: "",
          jobTitle: "",
          phone: "",
          email: "",
          location: "",
          payOutBy: ""
        },
        branches: []
      }
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      },
      setImages(state, data) {
        console.log(data.link);
        console.log(data.forWhat);
        if (data.forWhat == "main") {
          state.merchantData[data.propName] = data.link;
          console.log("donnne");
        } else if (data.forWhat == "branch") {
          state.merchantData.branches[data.branch][data.propName] = data.link;
        }
      }
    },
    actions: {
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          } else {
            token = jwtCookie.split("=")[1];
            expirationDate = req.headers.cookie
              .split(";")
              .find(c => c.trim().startsWith("expirationDate="))
              .split("=")[1];
          }
        } else {
          // this when we are on the client, so we will fetch from the localstorge
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          vuexContext.dispatch("logout");
          return;
        }
        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationdate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      }
    },

    getters: {
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};
export default createStore;
