import {cp} from "shelljs";

// Copy all the view templates
cp( "-R", "src/views", "dist/" );
cp( "-R", "src/public/css", "dist/public" );