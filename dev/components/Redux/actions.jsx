var addPhone = function (phone) {
    return {
      type: "ADD_PHONE",
      phone
    }
  };
  var deletePhone = function (phone) {
    return {
      type: "DELETE_PHONE",
      phone
    }
  };
  function action_1(value) {
    return { 
        type: ACTION_1,
        value_1: value
    };
}

module.exports = {addPhone, deletePhone, action_1};