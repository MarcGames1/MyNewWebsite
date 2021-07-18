

function ConsoleMessage(){
    var styles = [
        'background: linear-gradient(#1e9854, #38c272)'
        , 'color: white'
        , 'display: block'
        , 'padding: 10px 30px'
        , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
        , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
        , 'line-height: 40px'
        , 'text-align: center'
        , 'font-weight: bold'
        , 'font-size: 16px'
    ].join(';');
    
    var styles2 = [
        'background: linear-gradient(#38c272, #1e9854)'
        , 'color: white'
        , 'display: block'
        , 'padding: 10px 30px'
        , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
        , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
        , 'line-height: 40px'
        , 'text-align: center'
        , 'font-weight: bold'
        , 'font-size: 16px'
    ].join(';');
    
    console.log('%c Stim ca regulile sunt facute pentru a fi incalcate, te apreciem pentru asta si am vrea sa te cunoastem.', styles);
    console.log('%c Trimite-mi direct un mail cu CV ul tau pe adresa George.marcu.dev@gmail.com cu subiectul Console_Mesage', styles2);
}

export default ConsoleMessage