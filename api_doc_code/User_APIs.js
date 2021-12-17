//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============== <---------> ///////// =====================> 
===================== ///////// <---------> User's Methods <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================



/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Get User Info <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /user Retrieve User information
 * @apiName getUser
 * @apiGroup User
 * @apiPermission User, Admin, Super_Admin
 * @apidescription Gets information of the user account.
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 *
 *@apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data":"{ Object Contains User's Information }"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> =========================== <---------> ///////// =====================> 
===================== ///////// <---------> Retrieve a User's Dashboard <---------> ///////// =====================> 
===================== ///////// <---------> =========================== <---------> ///////// =====================> 
*/

/**
 * @api {get} /dashboard Retrieve a User's Dashboard
 * @apiName getDashboard
 * @apiGroup  User
 * @apiPermission User, Admin, Super_Admin
 * @apidescription go to the dashboard page
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data":"{ Object Contains Posts, ... }"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ========== <---------> ///////// =====================> 
===================== ///////// <---------> Follow Tag <---------> ///////// =====================> 
===================== ///////// <---------> ========== <---------> ///////// =====================> 
*/

/**
 * @api {post} /user/follow_tag Follow Tag
 * @apiName followTag
 * @apiGroup User
 * @apiPermission User, Admin, Super_Admin
 * @apidescription can share with anyone, we'll send post url
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} tag_text the tag
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data":"Tag Following Success"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <---------> Get Followed Tags <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {get} /user/get_followed_tags  Tags Followed
 * @apiName getFollowedTags
 * @apiGroup User
 * @apiPermission User, Admin, Super_Admin
 * @apidescription get the tag followed by the user, used in search
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data":"[ array of strings have all tags followed by the user ]"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ======= <---------> ///////// =====================> 
===================== ///////// <---------> Sign Up <---------> ///////// =====================> 
===================== ///////// <---------> ======= <---------> ///////// =====================> 
*/

/**
 * @api {post} /signup Sign Up.
 * 
 * @apiName signUp
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} email User's email
 * @apiParam {String} password User's password
 * @apiParam {String} blogName User's blog name
 * @apiParam {String} age User's age
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 201 CREATED
 *      {
 *          "meta": {
 *                       "status": 201,
 *                       "msg": "CREATED"
 *                  },
 * 
 *          "res":{
 *                       "message": "Sign Up Successfully (<:>)"
 *                       "data":token
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "meta": {
 *                       "status": 400,
 *                       "msg": "BAD_REQUEST"
 *                  },
 * 
 *          "res":{
 *                       "error": "Email is Already Exists (<:>)"
 *                       "data":""
 *                     }   
 *      }
 * 
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ======= <---------> ///////// =====================> 
===================== ///////// <---------> Log in <---------> ///////// =====================> 
===================== ///////// <---------> ======= <---------> ///////// =====================> 
*/

/**
 * @api {post} /login Log In.
 * 
 * @apiName login
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} email User's email
 * @apiParam {String} password User's password
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "res":{
 *                       "message": "LogIn Successfully (<:>)"
 *                       "data":token
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "meta": {
 *                       "status": 400,
 *                       "msg": "BAD_REQUEST"
 *                  },
 * 
 *          "res":{
 *                       "error": InCorrect Password (<:>)
 *                       "data":""
 *                     }   
 *      }
 * 
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> =================== <---------> ///////// =====================> 
===================== ///////// <---------> Log in Using Google <---------> ///////// =====================> 
===================== ///////// <---------> =================== <---------> ///////// =====================> 
*/

/**
 * @api {get} /google Log In Using Google.
 * 
 * @apiName googleLogin
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Sign Up With Google Successfully (<:>)"
 *                       "data":token
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *      {
 *          "meta": {
 *                       "status": 500,
 *                       "msg": "INTERNAL_SERVER_ERROR"
 *                  },
 * 
 *          "res":{
 *                       "error": "Error In Sign Up With Google Function (<:>)"
 *                       "data":""
 *                     }   
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> =========== <---------> ///////// =====================> 
===================== ///////// <---------> Google Info <---------> ///////// =====================> 
===================== ///////// <---------> =========== <---------> ///////// =====================> 
*/

/**
 * @api {put} /google/info Update Google Account Info.
 * 
 * @apiName googleInfo
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} blogName User's blogName.
 * @apiParam {String} age User's age.
 * @apiParam {String} Token User's Secret Code.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "User Log In With Google Successfully (<:>)"
 *                       "data":token
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *      {
 *          "meta": {
 *                       "status": 500,
 *                       "msg": "INTERNAL_SERVER_ERROR"
 *                  },
 * 
 *          "res":{
 *                       "error": "Error In Google Info Function (<:>)"
 *                       "data":""
 *                     }   
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> =============================== <---------> ///////// =====================> 
===================== ///////// <---------> Log in Using Google For Android <---------> ///////// =====================> 
===================== ///////// <---------> =============================== <---------> ///////// =====================> 
*/

/**
 * @api {post} /androidSignUpWithGoogle Log In Using Google For Android.
 * 
 * @apiName googleLoginAndroid
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} googleToken Google Token
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Sign Up With Google For Android Successfully (<:>)"
 *                       "data":token
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *      {
 *          "meta": {
 *                       "status": 500,
 *                       "msg": "INTERNAL_SERVER_ERROR"
 *                  },
 * 
 *          "res":{
 *                       "error": "Error In Sign Up With Google Function (<:>)"
 *                       "data":""
 *                     }   
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> =========================== <---------> ///////// =====================> 
===================== ///////// <---------> Changing Your Email Address <---------> ///////// =====================> 
===================== ///////// <---------> =========================== <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/email Changing Your Email Address.
 * 
 * @apiName changeUserEmail
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Email User's new email
 * @apiParam {String} Password User's password
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Email Changed Successfully"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <--------->  Update password <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/updatePassword Update your password.
 * 
 * @apiName updatePassword
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Current_Password Current user's password
 * @apiParam {String} New_Password New user's password
 *
 *@apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Password Updated Successfully"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ====================== <---------> ///////// =====================> 
===================== ///////// <--------->  Deleting Your Account <---------> ///////// =====================> 
===================== ///////// <---------> ====================== <---------> ///////// =====================> 
*/

/**
 * @api {delete} /user/deleteAccount Deleting Your Account.
 * 
 * @apiName deleteAccount
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Email User's email
 * @apiParam {String} Password User's password
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Account Deleted Successfully"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ==================================================== <---------> ///////// =====================> 
===================== ///////// <--------->  Access and manage data associated with your account <---------> ///////// =====================> 
===================== ///////// <---------> ==================================================== <---------> ///////// =====================> 
*/

/**
 * @api {get} /user/data Access and manage data associated with your account.
 * 
 * @apiName accessdData
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Data Will Be Sent Via Email"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
===================== ///////// <--------->  Email Verification <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/verify/:token Email Verification.
 * 
 * @apiName accountVerification
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "res":{
 *                       "message": "Account Verified Successfully (<:>)",
 *                       "data": ""
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "meta": {
 *                       "status": 400,
 *                       "msg": "BAD_REQUEST"
 *                  },
 * 
 *          "res":{
 *                       "error": "Account Is Not Found or Already Verified (<:>)"
 *                       "data":""
 *                     }   
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
===================== ///////// <--------->  Get User Settings <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {get} /user/settings/ Get User Settings.
 * 
 * @apiName userSettings
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data": "{ Object Contains User Settings }"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <--------->  Forgot Password <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {get} /user/forgot_password Forgot Password.
 * 
 * @apiName forgotPassword
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Email User's email.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "{ Send Email To Reset Password }"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <--------->  Reset Password <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/reset_password/:Token Reset Password.
 * 
 * @apiName resetPassword
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Email User's email.
 * @apiParam {String} Password User's New Password.
 * @apiParam {String} Confirm User's Password.
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                      "message": "{ Password Updated Successfully }"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
===================== ///////// <--------->  Change Color Scheme <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/color Change Color Scheme.
 * 
 * @apiName colorScheme
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Color New Color Scheme.
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                      "message": "{ Color Scheme Updated Successfully }"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
===================== ///////// <--------->  Report Post <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {post} /pin/post Report Post.
 * 
 * @apiName reportPost
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} id Reported Post ID
 * @apiParam {String} Type Report's Type
 * @apiParam {String} content Report's Content
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                      "message": "Report Sent successfully"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }

/*=================== End =====================*/