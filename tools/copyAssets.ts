import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/views", "dist/" );
shell.cp( "-R", "src/public/css", "dist/public" );
shell.cp( "-R", "src/public/js", "dist/public" );
//shell.rm("-rf", 'dist/public/*.ts')