import Announcement from "../../views/user/announcement";
import Assignment from "../../views/user/Assignment";
import Attendance from "../../views/user/Attendance";
import StudyMaterial from "../../views/user/StudyMaterial";
import Test from "../../views/user/Test";

const UserPrivateRoute = [
  {
    path: "/test",
    element: <Test />,
    label: "Test",
  },
  {
    path: "/assignment",
    element: <Assignment />,
    label: "Assignment",
  },
  {
    path: "/announcement",
    element: <Announcement />,
    label: "Announcement",
  },
  {
    path: "/attendance",
    element: <Attendance />,
    label: "Attendance",
  },
  {
    path: "/study-material",
    element: <StudyMaterial />,
    label: "Study-Material",
  },
];

export default UserPrivateRoute;
