<template>
  <div class="en-searchBar">
    <div class="en-searchBar-content">
      <div class="en-searchBar-content-holder">
        <div class="en-searchBar-content-holder-word">
          <span class="en-searchBar-content-holder-word-icon">
            <i class="fas fa-search"></i>
          </span>

          <input
            class="en-searchBar-content-holder-word-input"
            type="text"
            placeholder="Search Yalladealz"
          />
        </div>
        <span class="en-searchBar-content-holder-between"></span>
        <div class="en-searchBar-content-holder-location">
          <div class="en-searchBar-content-holder-location-icon">
            <i class="far fa-compass"></i>
          </div>
          <input
            class="en-searchBar-content-holder-location-input"
            type="text"
            placeholder="Near Me"
          />
             <div class="en-searchBar-content-holder-location-searchIcon">
            <i class="far fa-compass"></i>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.en-searchBar {
  &-content {
    &-holder {
      width: 600px;
      background-color: rgb(238, 238, 238);
      height: 35px;
      border-radius: 10px;
      display: flex;
      flex-flow: row;
      align-items: center;
      &-word {
        height: 100%;
        width: 60%;
        padding-left: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        &-input {
          height: 100%;
          width: 80%;
          background-color: transparent;
          outline: none;
          border: 0px;
          margin-left: 10px;
          color: rgb(90, 90, 90);
          &::placeholder {
             color: rgb(90, 90, 90);
          }
          &:focus {
            background-color: white;
            border: 1px solid white;
          }
        }
        &-icon {
          width: 15%;
           color: rgb(90, 90, 90);
        }
        &:focus-within {
          background-color: white;
          border: 1px solid white;
        }
      }
      &-location {
        height: 100%;
        width: 40%;
         border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        flex-flow: row;
        &-input {
          height: 100%;
          width: 65%;
          background-color: transparent;
          outline: none;
          border: 0px;
          padding-left: 10px;
           color: rgb(90, 90, 90);

          &::placeholder {
             color: rgb(90, 90, 90);
          }
          &:focus {
            background-color: white;
            border: 1px solid white;
          }
        }
        &-icon {
            display: flex;
            align-items: center;
          width: 15%;
          height: 100%;
           color: rgb(90, 90, 90);
           padding-left: 10px;
        }
        &-searchIcon{
            display: flex;
            align-items: center;
          width: 20%;
          height: 100%;
          padding-left: 15px;
           color: rgb(90, 90, 90);
           background-color: rgb(235, 12, 60);
           color: white;
            border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
           font-size: 20px;
        }
        &:focus-within {
          background-color: white;
          border: 1px solid white;
        }
      }
      &-between {
        border-right: 1px solid rgb(90, 90, 90);
        height: 25px;
      }
    }
  }
}
@media (max-width: 992px) {
  .en-searchBar {
  &-content {
    &-holder {
      width: 450px;
      &-location {
        &-searchIcon{
          padding-right: 30px;
        }
      }
    }
  }
}
}
</style>