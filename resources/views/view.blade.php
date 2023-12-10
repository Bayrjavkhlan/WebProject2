<!DOCTYPE html>
<html>
<head>
    <!-- Include your compiled JavaScript file -->
    <script src="{{ mix('js/app.jsx') }}" defer></script>
</head>
<body>
    <!-- Your HTML content -->
    <div id="app"></div>
    <p>ene nugu react comptoi blade</p>    
    <script>
        ReactDOM.render(<MyComponent />, document.getElementById('app'));
    </script>
</body>
</html>
