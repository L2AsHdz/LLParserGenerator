import {cp} from "shelljs";

// Copy all the view templates
cp( "-R", "src/views", "dist/" );
cp( "-R", "src/public/css", "dist/public" );
cp( "-R", "src/public/js", "dist/public" );
cp( "-R", "src/analizador", "dist/" );
//shell.rm("-rf", 'dist/public/*.ts')