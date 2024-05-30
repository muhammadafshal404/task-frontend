export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  CATEGORY: "/category",
  CAR: "/car",
  ADD_CATEGORY: "/add-category",
};

export const MENU_ITEM_KEYS = {
  ROOT: "Dashboard",
  CATEGORIES: "Categories",
  CARS: "Cars",
};

export const MESSAGES = {
  DELETE_CATEGORY: "Are You Sure, You want to Delete Category.",
  DELETE_CAR: "Are You Sure, You want to Delete Car.",
  PROJECT_ADD_SUCCESS: "New Project Has Been Added",
  VACATION_ADD_SUCCESS: "New Vacation Has Been Added",
  RESOURCE_ALLOCATE_SUCCESS: "Resource Allocated",
  RESOURCE_ALLOCATE_SUCCESS_DESCRIPTION:
    "Resource Has Been Allocated Successfully",
  RESOURCE_ALLOCATE_ERROR: "Failed TOo Allocate Resource",
  PROJECT_EDIT_SUCCESS: "Project Has Been Edited",
  PROJECT_ACTIVATE_SUCCESS: "Project Has Been Resumed",
  PROJECT_DEACTIVATE_SUCCESS: "Project Has Been Paused",
  CLIENT_ADD_SUCCESS: "New Client Has Been Added",
  RESOURCE_REQUEST_SUCCESS: "Resource Has Been Requested Successfully",
  CATEGORY_ADD_SUCCESS: "Category Has Been added Successfully",
  CATEGORY_EDIT_SUCCESS: "Category Has Been edited Successfully",
  CAR_ADD_SUCCESS: "Car Has Been added Successfully",
  CAR_EDIT_SUCCESS: "Car Has Been edited Successfully",
  ERROR: "Some Error Occured",
  CATEGORY_DELETED: "🗑 Category deleted successfully",
  CAR_DELETED: "🗑 Car deleted successfully",
  RESOURCE_REMOVE_SUCCESS: "Resource removed successfully",
  LOGIN_SUCCESS: "Logged in successfully",
  SKILL_CREATED: "Skill created successfully",
  DOMAIN_CREATED: "Domain created successfully",
  CLIENT_CREATED: "Client created successfully",
  LOGIN_ERROR: "Incorrect email/password",
  FORGET_PASSWORD_ERROR: "Email Not Found.",
  FORGET_PASSWORD_SUCCESS: "A Reset Password Link Is Send on this Email.",
  LINK_EXPIRED: "Link has been expired.",
  TOKEN_NOT_FOUND: "Invalid Token.",
  PASSWORD_UPDATED: "Password has been reset.",
  INVALID_LINK: "Link is not valid.",
  RESOURCE_CONTEXT_ERROR:
    "Looks like you have forgot to wrap your component in `ResourceContextProvider`",
  REMOVE_VACATION: "Vacation Removed",
  ERROR_OCCURED: "Error Occured",
  SKILL_CREATE_ERROR: "Failed to create Skill",
  CATEGORY_NAME_ERROR: "Please enter a name for the Category!",

  CAR_REGISTRATION_NO_ERROR: "Please enter a Registration No for the Car!",
  RESOURCE_ACTIVATION_WARNING_MESSAGE:
    "Are you sure you want to activate this resource?",
  RESOURCE_DEACTIVATION_WARNING_MESSAGE:
    "Are you sure you want to deactivate this resource?",
  PROJECT_ACTIVATION_WARNING_MESSAGE:
    "Are you sure you want to activate this project?",
  PROJECT_DEACTIVATION_WARNING_MESSAGE:
    "🚨 Are you sure you want to deactivate this project?",
  ASSIGNED_LEVEL_ERROR: "Please select assigned level!",
  CONTRACT_START_DATE_ERROR: "Please select contract start date",
  CONTRACT_END_DATE_ERROR: "Please select contract end date",
  SELECT_TEAMS_ERROR: "Please select a team from the dropdown!",
  SELECT_VACATION_TYPE_ERROR: "Please select vacation type!",
  SELECT_START_DATE_ERROR: "Please select Start date!",
  SELECT_END_DATE_ERROR: "Please select End date!",
  CLICK_TO_PAUSE: "Click to Pause",
  CLICK_TO_RESUME: "Click to Resume",
  PASSWORD_RESET_SUCCESS: "Password resetted successfully!",
  RESOURCE_UPDATE_ERROR: "Unable to update resource!",
  RESOURCE_ACTIVATED_SUCCESS: "Resource Activated!",
  RESOURCE_DEACTIVATED_SUCCESS: "Resource Deactivated!",
  REMOVE_ASSIGNED_RESOURCES: "Resources Assignment Removed",
  PROJECT_DEACTIVATION_WARNING:
    "Note: All the allocated resources will be removed!",
  RESOURCE_DEACTIVATION_WARNING:
    "Note: Resource will be removed from all the assigned projects!",
  ENTER_DAILY_AVAILABILITY_HOURS:
    "Please enter valid daily availability hours!",
  DAILY_AVAILIBILITY_HOURS_RANGE:
    "Daily availability hours must be between 1 and 6!",
  JOINING_DATE_ERROR: "Please select joining date",
  EXIT_DATE_ERROR: "Please select exit date",
  PROJECT_NAME_ERROR: "Please enter a name for the Project!",
  CLIENT_NAME_ERROR: "Please select a client or add one!",
  DOMAIN_ERROR: "Please select domain!",
  PROJECT_TYPE_ERROR: "Please select project type!",
  SELECT_TEAM_ERROR: "Please select a team!",
  SELECT_ROLE_ERROR: "Please select a role!",
  SELECT_RESOURCE_TYPE_ERROR: "Please select a resource type!",
  WEEKLY_ALLOCATION_HOURS_ERROR: "weekly allocation hours",
  SELECT_LEVEL_ERROR: "Please select level!",
  EMPTY_SPACES_NOT_ALLOWED: "Please remove empty spaces from this field.",
  CERTIFICATION_CREATED: "Certification created successfully",
  AUTHORIZER_CREATED: "Authorizer created successfully",
  SELECT_CERTIFICATION_MESSAGE: "Please select a certification!",
  SELECT_AUTHORIZED_BY_MESSAGE: "Please select a Authorizer!",
  DATE_SELECTION_ERROR: "End date cannot be before start date",
  ADD_PROJECT_PLAN: "Please Add Project Plan.",
  NO_CHANGES_MADE: "You have not made Changes.",
  FETCH_CERTIFICATIONS:
    "An error occurred while fetching certifications. Please try again later.",
  FILE_SIZE_ERROR: "File Size Exceeded",
  PROJECT_PLAN_SAVED: "✅ Project plan saved successfully!",
  PROJECT_PLAN_CLOSED: "✅ Project plan closed successfully!",
  PROJECT_PLAN_ERROR: "❌ One of the plans was not saved",
  PROJECT_PLAN_DELETED: "🗑 Project Plan deleted successfully",
  NOTE_CREATED: "Note Created Successfully",
  NOTE_UPDATED: "Note Updated Successfully",
  NOTE_DELETED: "Note Deleted Successfully",
  NOTE_DELETE_WARNING: "Are You sure, You want to delete note.",
  DELETE_NOTE: "Delete Note",
  CAR_MODEL_ERROR: "Please Enter Model For Car!",
  CAR_COLOR_ERROR: "Please Enter Color For Car!",
};

export const AUTH_TOKEN = "Authorization";

export const LOCAL_STORAGE = {
  ID_TOKEN: "token",
  USER: "user",
};

export const TITLES = {
  NO_OF_REGISTERED_CARS: "Registerd Cars",
  EDIT_CATEGORY: "Edit Category",
  ADD_CATEGORY: "Add Category",
  ADD_CAR: "Add Car",
  EDIT_CAR: "Edit Car",
};

export const BUTTON_TITLES = {
  EDIT: "Edit",
  DELETE: "Delete",
  ADD: "Add",
  ADD_CATEGORY: "Add Category",
  ADD_CAR: "Add Car",
};

export const POPOVER_TITLES = {
  DELETE_CATEGORY: "Delete Category",
  DELETE_CAR: "Delete Car",
};

export const ACTION_ITEMS = [
  {
    action: "edit",
    value: "Edit",
  },
  {
    action: "delete",
    value: "Delete",
  },
];

export const LABELS = {
  NAME: "Name",
  REGISTRATION_NO: "Registration No",
  COLOR: "Color",
  MODEL: "Model",
  CATEGORY: "Category",
};

export const PLACE_HOLDERS = {
  CATEGORY_NAME: "Category Name",
  REGISTRATION_NO: "Registration No",
  COLOR: "Color",
  MODEL: "Model",
  SELECT_CATEGORY: "Select Category",
};
