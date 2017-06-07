vDataJSON['jsoneditor'] = {
    "template": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>Advanced JSON Editor Example</title>\n    <link href=\"../jquery/jquery-ui.css\" rel=\"stylesheet\">\n    <!-- Bootstrap Core CSS -->\n     <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\">\n     <!-- Font-Awesome CSS -->\n     <link href=\"font-awesome-4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n     <script src=\".js/arrayhash.js\"></script>\n     <script src=\"js/filesaver.js\"></script>\n    <script src=\"js/jsoneditor.js\"></script>\n    <script>\n\n    // Set the default CSS theme and icon library globally\n    JSONEditor.defaults.theme = 'bootstrap3';\n    JSONEditor.defaults.iconlib = 'fontawesome4';\n\n    function saveFile2HDD(pFilename,pContent) {\n      var file = new File([pContent], {type: \"text/plain;charset=utf-8\"});\n      saveAs(file,pFilename);\n    }\n\n    </script>\n  </head>\n  <body style=\"margin:20px\">\n    <h1>JSON Editor</h1>\n\n    <button id='bExportJSON'>Export JSON</button>\n    <button id='bExportSchema'>Export JSON Schema</button>\n    <span id='valid_indicator'></span>\n<hr>\n    <div id='editor_holder'></div>\n\n    <script>\n      // This is the starting value for the editor\n      // We will use this to seed the initial editor\n      // and to provide a \"Restore to Default\" button.\n      var starting_value = ___JSON_DATA___;\n\t  var vSchema = ___JSON_SCHEMA___;\n\t\n      // Initialize the editor\n      // Initialize the editor\n      var editor = new JSONEditor(document.getElementById('editor_holder'),{\n        // Enable fetching schemas via ajax\n        ajax: true,\n\n        // The schema for the editor\n        schema: vSchema,\n\n        // Seed the form with a starting value\n        startval: starting_value,\n\n        // Disable additional properties\n        no_additional_properties: true,\n\n        // Require all properties by default\n        required_by_default: true\n      });\n\n      // Hook up the submit button to log to the console\n      document.getElementById('bExportJSON').addEventListener('click',function() {\n            // Get the value from the editor\n            var vJSON = editor.getValue();\n            var vContent = JSON.stringify(vJSON,null,4);\n            console.log(\"JSON output: \"+vContent);\n            saveFile2HDD(\"data.json\",vContent);\n     \n      });\n\n      // Hook up the Restore to Default button\n      document.getElementById('bExportSchema').addEventListener('click',function() {\n           var vContent = JSON.stringify(vSchema,null,4);\n            console.log(\"JSON Schema output: \"+vContent);\n            saveFile2HDD(\"schema.json\",vContent);\n        //editor.setValue(starting_value);\n      });\n\n      // Hook up the enable/disable button\n      document.getElementById('enable_disable').addEventListener('click',function() {\n        // Enable form\n        if(!editor.isEnabled()) {\n          editor.enable();\n        }\n        // Disable form\n        else {\n          editor.disable();\n        }\n      });\n\n      // Hook up the validation indicator to update its\n      // status whenever the editor changes\n      editor.on('change',function() {\n        // Get an array of errors from the validator\n        var errors = editor.validate();\n\n        var indicator = document.getElementById('valid_indicator');\n\n        // Not valid\n        if(errors.length) {\n          indicator.style.color = 'red';\n          indicator.textContent = \"not valid\";\n        }\n        // Valid\n        else {\n          indicator.style.color = 'green';\n          indicator.textContent = \"valid\";\n        }\n      });\n    </script>\n    <script src=\"../jquery/external/jquery/jquery.js\" type=\"text/javascript\"></script>\n    <script src=\"../jquery/jquery-ui.js\" type=\"text/javascript\"></script>\n    <script src=\"js/bootstrap.min.js\"></script>\n\n        <button id='submit'>Submit (console.log)</button>\n\n        <script>\n          // Hook up the submit button to log to the console\n          document.getElementById('submit').addEventListener('click',function() {\n            // Get the value from the editor\n            var vJSON = editor.getValue();\n            var vContent = JSON.stringify(vJSON,null,4);\n            console.log(\"JSON output: \"+vContent);\n          });\n        </script>\n\n  </body>\n</html>\n",
    "date": "7.6.2017"
}
