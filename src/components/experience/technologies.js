import {
  FaReact as ReactIcon,
  FaNodeJs as NodeJSIcon,
  FaBootstrap as BootstrapIcon,
  FaCss3Alt as CSSIcon,
  FaHtml5 as HTMLIcon,
} from "react-icons/fa";
import {
  SiTypescript as TSIcon,
  SiExpress as ExpressJSIcon,
  SiMongodb as MongoDBIcon,
  SiPostgresql as PostgreSQLIcon,
  SiSqlite as SQLiteIcon,
} from "react-icons/si";
import { IoLogoJavascript as JSIcon } from "react-icons/io";
import { GrMysql as MySQLIcon } from "react-icons/gr";

const technologies = [
  {
    id: 1,
    title: "React.js",
    icon: ReactIcon,
    level: "Intermediate",
    type: "Frontend",
  },
  {
    id: 2,
    title: "TypeScript",
    icon: TSIcon,
    level: "Intermediate",
    type: "Frontend",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: JSIcon,
    level: "Expert",
    type: "Frontend",
  },
  {
    id: 4,
    title: "Bootstrap",
    icon: BootstrapIcon,
    level: "Intermediate",
    type: "Frontend",
  },
  {
    id: 5,
    title: "CSS",
    icon: CSSIcon,
    level: "Expert",
    type: "Frontend",
  },
  {
    id: 6,
    title: "HTML",
    icon: HTMLIcon,
    level: "Expert",
    type: "Frontend",
  },
  {
    id: 7,
    title: "Node.js",
    icon: NodeJSIcon,
    level: "Intermediate",
    type: "Backend",
  },
  {
    id: 8,
    title: "Express",
    icon: ExpressJSIcon,
    level: "Intermediate",
    type: "Backend",
  },
  {
    id: 8,
    title: "MongoDB",
    icon: MongoDBIcon,
    level: "Intermediate",
    type: "Backend",
  },
  {
    id: 9,
    title: "PostgreSQL",
    icon: PostgreSQLIcon,
    level: "Intermediate",
    type: "Backend",
  },
  {
    id: 10,
    title: "MySQL",
    icon: MySQLIcon,
    level: "Intermediate",
    type: "Backend",
  },
  {
    id: 11,
    title: "SQLite",
    icon: SQLiteIcon,
    level: "Intermediate",
    type: "Backend",
  },
];

export default technologies;
