(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('fs'), require('path'), require('string_decoder')) :
  typeof define === 'function' && define.amd ? define(['fs', 'path', 'string_decoder'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.initGdalJs = factory(global.require$$0, global.require$$1, global.require$$0$1));
})(this, (function (require$$0, require$$1, require$$0$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
  var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
  var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);

  // Only Node.JS has a process variable that is of [[Class]] process
  var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';

  var gdal3WebAssembly = {exports: {}};

  (function (module, exports) {
  var CModule = (() => {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
    if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
    return (
  function(CModule) {
    CModule = CModule || {};

  var Module=typeof CModule!="undefined"?CModule:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject;});if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;}Module.expectedDataFileDownloads++;(function(){if(Module["ENVIRONMENT_IS_PTHREAD"])return;var loadPackage=function(metadata){if(typeof window==="object"){window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/");}else if(typeof process==="undefined"&&typeof location!=="undefined"){encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/");}var PACKAGE_NAME="/home/bugra/Documents/MiniProject/gdal3.js/build/package/gdal3WebAssembly.data";var REMOTE_PACKAGE_BASE="gdal3WebAssembly.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)");}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string"){require$$0__default["default"].readFile(packageName,function(err,contents){if(err){errback(err);}else {callback(contents.buffer);}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size};}else {Module.dataFileDownloads[url].loaded=event.loaded;}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++;}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")");}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...");}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData);}else {throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null);}function handleError(error){console.error("package error:",error);}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null;}else {fetched=data;}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","usr",true,true);Module["FS_createPath"]("/usr","share",true,true);Module["FS_createPath"]("/usr/share","gdal",true,true);Module["FS_createPath"]("/usr/share","proj",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio;}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name);},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray);},finish:function(byteArray){var that=this;Module["FS_createDataFile"](this.name,null,byteArray,true,true,true);Module["removeRunDependency"]("fp "+that.name);this.requests[this.name]=null;}};var files=metadata["files"];for(var i=0;i<files.length;++i){new DataRequest(files[i]["start"],files[i]["end"],files[i]["audio"]||0).open("GET",files[i]["filename"]);}function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);DataRequest.prototype.byteArray=byteArray;var files=metadata["files"];for(var i=0;i<files.length;++i){DataRequest.prototype.requests[files[i].filename].onload();}Module["removeRunDependency"]("datafile_/home/bugra/Documents/MiniProject/gdal3.js/build/package/gdal3WebAssembly.data");}Module["addRunDependency"]("datafile_/home/bugra/Documents/MiniProject/gdal3.js/build/package/gdal3WebAssembly.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null;}else {fetchedCallback=processPackageData;}}if(Module["calledRun"]){runWithFS();}else {if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS);}};loadPackage({"files":[{"filename":"/usr/share/gdal/jpfgdgml_RdArea.gfs","start":0,"end":1515},{"filename":"/usr/share/gdal/grib2_table_4_2_0_3.csv","start":1515,"end":11849},{"filename":"/usr/share/gdal/plscenesconf.json","start":11849,"end":47162},{"filename":"/usr/share/gdal/header.dxf","start":47162,"end":53734},{"filename":"/usr/share/gdal/grib2_table_4_2_10_2.csv","start":53734,"end":63614},{"filename":"/usr/share/gdal/pci_datum.txt","start":63614,"end":98719},{"filename":"/usr/share/gdal/nitf_spec.xml","start":98719,"end":247574},{"filename":"/usr/share/gdal/grib2_table_4_2_0_6.csv","start":247574,"end":259216},{"filename":"/usr/share/gdal/pci_ellips.txt","start":259216,"end":262682},{"filename":"/usr/share/gdal/grib2_table_4_2_4_5.csv","start":262682,"end":272178},{"filename":"/usr/share/gdal/grib2_table_4_2_4_4.csv","start":272178,"end":281867},{"filename":"/usr/share/gdal/inspire_cp_CadastralBoundary.gfs","start":281867,"end":283517},{"filename":"/usr/share/gdal/ozi_ellips.csv","start":283517,"end":284866},{"filename":"/usr/share/gdal/grib2_table_4_2_4_1.csv","start":284866,"end":294552},{"filename":"/usr/share/gdal/grib2_table_4_2_2_0.csv","start":294552,"end":306753},{"filename":"/usr/share/gdal/ozi_datum.csv","start":306753,"end":315235},{"filename":"/usr/share/gdal/grib2_table_4_2_10_4.csv","start":315235,"end":325428},{"filename":"/usr/share/gdal/eedaconf.json","start":325428,"end":325807},{"filename":"/usr/share/gdal/grib2_table_4_2_10_3.csv","start":325807,"end":335583},{"filename":"/usr/share/gdal/grib2_table_4_2_local_NCEP.csv","start":335583,"end":363560},{"filename":"/usr/share/gdal/jpfgdgml_RvrMgtBdry.gfs","start":363560,"end":364948},{"filename":"/usr/share/gdal/grib2_table_4_2_20_1.csv","start":364948,"end":374802},{"filename":"/usr/share/gdal/jpfgdgml_BldA.gfs","start":374802,"end":376303},{"filename":"/usr/share/gdal/vdv452.xsd","start":376303,"end":379157},{"filename":"/usr/share/gdal/grib2_table_4_2_0_19.csv","start":379157,"end":391031},{"filename":"/usr/share/gdal/s57expectedinput.csv","start":391031,"end":411916},{"filename":"/usr/share/gdal/jpfgdgml_WStrA.gfs","start":411916,"end":413419},{"filename":"/usr/share/gdal/ruian_vf_v1.gfs","start":413419,"end":480753},{"filename":"/usr/share/gdal/inspire_cp_BasicPropertyUnit.gfs","start":480753,"end":482493},{"filename":"/usr/share/gdal/grib2_table_4_2_4_6.csv","start":482493,"end":492127},{"filename":"/usr/share/gdal/GDALLogoGS.svg","start":492127,"end":504432},{"filename":"/usr/share/gdal/s57objectclasses.csv","start":504432,"end":557759},{"filename":"/usr/share/gdal/GDALLogoColor.svg","start":557759,"end":570064},{"filename":"/usr/share/gdal/pds4_template.xml","start":570064,"end":573497},{"filename":"/usr/share/gdal/default.rsc","start":573497,"end":1037129},{"filename":"/usr/share/gdal/grib2_table_4_2_0_17.csv","start":1037129,"end":1037985},{"filename":"/usr/share/gdal/tms_NZTM2000.json","start":1037985,"end":1043202},{"filename":"/usr/share/gdal/grib2_table_4_2_20_2.csv","start":1043202,"end":1052708},{"filename":"/usr/share/gdal/jpfgdgml_ElevPt.gfs","start":1052708,"end":1054208},{"filename":"/usr/share/gdal/cubewerx_extra.wkt","start":1054208,"end":1066185},{"filename":"/usr/share/gdal/ecw_cs.wkt","start":1066185,"end":1429902},{"filename":"/usr/share/gdal/grib2_table_4_2_1_2.csv","start":1429902,"end":1439700},{"filename":"/usr/share/gdal/osmconf.ini","start":1439700,"end":1444895},{"filename":"/usr/share/gdal/grib2_subcenter.csv","start":1444895,"end":1447223},{"filename":"/usr/share/gdal/grib2_table_4_2_0_2.csv","start":1447223,"end":1458026},{"filename":"/usr/share/gdal/grib2_table_4_2_0_16.csv","start":1458026,"end":1467697},{"filename":"/usr/share/gdal/epsg.wkt","start":1467697,"end":1467724},{"filename":"/usr/share/gdal/jpfgdgml_SBBdry.gfs","start":1467724,"end":1468977},{"filename":"/usr/share/gdal/jpfgdgml_BldL.gfs","start":1468977,"end":1470480},{"filename":"/usr/share/gdal/ruian_vf_st_v1.gfs","start":1470480,"end":1516452},{"filename":"/usr/share/gdal/grib2_table_4_2_0_190.csv","start":1516452,"end":1525959},{"filename":"/usr/share/gdal/gmlasconf.xml","start":1525959,"end":1533391},{"filename":"/usr/share/gdal/grib2_table_4_2_0_0.csv","start":1533391,"end":1543754},{"filename":"/usr/share/gdal/gt_datum.csv","start":1543754,"end":1559558},{"filename":"/usr/share/gdal/ruian_vf_st_uvoh_v1.gfs","start":1559558,"end":1562158},{"filename":"/usr/share/gdal/LICENSE.TXT","start":1562158,"end":1581972},{"filename":"/usr/share/gdal/jpfgdgml_SBAPt.gfs","start":1581972,"end":1583347},{"filename":"/usr/share/gdal/ruian_vf_ob_v1.gfs","start":1583347,"end":1630122},{"filename":"/usr/share/gdal/jpfgdgml_WL.gfs","start":1630122,"end":1631621},{"filename":"/usr/share/gdal/grib2_table_4_2_2_3.csv","start":1631621,"end":1642255},{"filename":"/usr/share/gdal/tms_LINZAntarticaMapTileGrid.json","start":1642255,"end":1646382},{"filename":"/usr/share/gdal/GDALLogoBW.svg","start":1646382,"end":1659404},{"filename":"/usr/share/gdal/grib2_table_4_2_4_9.csv","start":1659404,"end":1668940},{"filename":"/usr/share/gdal/gmlasconf.xsd","start":1668940,"end":1717594},{"filename":"/usr/share/gdal/jpfgdgml_RdCompt.gfs","start":1717594,"end":1719240},{"filename":"/usr/share/gdal/grib2_process.csv","start":1719240,"end":1724166},{"filename":"/usr/share/gdal/stateplane.csv","start":1724166,"end":1734526},{"filename":"/usr/share/gdal/trailer.dxf","start":1734526,"end":1736801},{"filename":"/usr/share/gdal/nitf_spec.xsd","start":1736801,"end":1744488},{"filename":"/usr/share/gdal/grib2_table_4_2_3_6.csv","start":1744488,"end":1745307},{"filename":"/usr/share/gdal/bag_template.xml","start":1745307,"end":1754327},{"filename":"/usr/share/gdal/s57attributes.csv","start":1754327,"end":1774328},{"filename":"/usr/share/gdal/vdv452.xml","start":1774328,"end":1800144},{"filename":"/usr/share/gdal/jpfgdgml_Cntr.gfs","start":1800144,"end":1801645},{"filename":"/usr/share/gdal/jpfgdgml_SBArea.gfs","start":1801645,"end":1803152},{"filename":"/usr/share/gdal/grib2_table_4_2_10_0.csv","start":1803152,"end":1814925},{"filename":"/usr/share/gdal/grib2_table_4_2_4_10.csv","start":1814925,"end":1824626},{"filename":"/usr/share/gdal/grib2_table_4_2_0_7.csv","start":1824626,"end":1835117},{"filename":"/usr/share/gdal/jpfgdgml_RailCL.gfs","start":1835117,"end":1836624},{"filename":"/usr/share/gdal/jpfgdgml_RdEdg.gfs","start":1836624,"end":1838266},{"filename":"/usr/share/gdal/esri_StatePlane_extra.wkt","start":1838266,"end":2170812},{"filename":"/usr/share/gdal/jpfgdgml_RdSgmtA.gfs","start":2170812,"end":2172456},{"filename":"/usr/share/gdal/grib2_table_4_2_10_191.csv","start":2172456,"end":2182090},{"filename":"/usr/share/gdal/seed_2d.dgn","start":2182090,"end":2191306},{"filename":"/usr/share/gdal/grib2_table_4_2_local_index.csv","start":2191306,"end":2191557},{"filename":"/usr/share/gdal/grib2_table_4_2_2_4.csv","start":2191557,"end":2202785},{"filename":"/usr/share/gdal/grib2_table_4_2_0_5.csv","start":2202785,"end":2212611},{"filename":"/usr/share/gdal/grib2_table_4_2_1_1.csv","start":2212611,"end":2222266},{"filename":"/usr/share/gdal/jpfgdgml_LeveeEdge.gfs","start":2222266,"end":2223652},{"filename":"/usr/share/gdal/grib2_table_4_2_3_3.csv","start":2223652,"end":2224436},{"filename":"/usr/share/gdal/tms_MapML_CBMTILE.json","start":2224436,"end":2232233},{"filename":"/usr/share/gdal/grib2_table_4_2_0_20.csv","start":2232233,"end":2244359},{"filename":"/usr/share/gdal/netcdf_config.xsd","start":2244359,"end":2251850},{"filename":"/usr/share/gdal/grib2_table_4_2_10_1.csv","start":2251850,"end":2261448},{"filename":"/usr/share/gdal/grib2_table_4_2_0_14.csv","start":2261448,"end":2270999},{"filename":"/usr/share/gdal/grib2_table_4_2_4_7.csv","start":2270999,"end":2280555},{"filename":"/usr/share/gdal/grib2_table_4_2_local_NDFD.csv","start":2280555,"end":2283214},{"filename":"/usr/share/gdal/grib2_table_4_2_4_2.csv","start":2283214,"end":2292874},{"filename":"/usr/share/gdal/grib2_table_4_2_3_2.csv","start":2292874,"end":2296707},{"filename":"/usr/share/gdal/jpfgdgml_RdASL.gfs","start":2296707,"end":2297958},{"filename":"/usr/share/gdal/jpfgdgml_CommBdry.gfs","start":2297958,"end":2299342},{"filename":"/usr/share/gdal/vicar.json","start":2299342,"end":2301749},{"filename":"/usr/share/gdal/grib2_table_4_2_0_18.csv","start":2301749,"end":2311973},{"filename":"/usr/share/gdal/s57agencies.csv","start":2311973,"end":2325277},{"filename":"/usr/share/gdal/jpfgdgml_CommPt.gfs","start":2325277,"end":2326912},{"filename":"/usr/share/gdal/grib2_table_4_2_0_15.csv","start":2326912,"end":2336758},{"filename":"/usr/share/gdal/grib2_table_4_2_3_1.csv","start":2336758,"end":2347421},{"filename":"/usr/share/gdal/jpfgdgml_RdMgtBdry.gfs","start":2347421,"end":2348807},{"filename":"/usr/share/gdal/inspire_cp_CadastralZoning.gfs","start":2348807,"end":2353619},{"filename":"/usr/share/gdal/inspire_cp_CadastralParcel.gfs","start":2353619,"end":2356069},{"filename":"/usr/share/gdal/grib2_table_4_2_4_0.csv","start":2356069,"end":2365622},{"filename":"/usr/share/gdal/grib2_table_4_2_local_MRMS.csv","start":2365622,"end":2381209},{"filename":"/usr/share/gdal/gt_ellips.csv","start":2381209,"end":2382928},{"filename":"/usr/share/gdal/seed_3d.dgn","start":2382928,"end":2384976},{"filename":"/usr/share/gdal/tms_MapML_APSTILE.json","start":2384976,"end":2391249},{"filename":"/usr/share/gdal/grib2_table_4_2_20_0.csv","start":2391249,"end":2400795},{"filename":"/usr/share/gdal/grib2_table_4_5.csv","start":2400795,"end":2410808},{"filename":"/usr/share/gdal/grib2_table_4_2_3_5.csv","start":2410808,"end":2411728},{"filename":"/usr/share/gdal/template_tiles.mapml","start":2411728,"end":2413675},{"filename":"/usr/share/gdal/gml_registry.xml","start":2413675,"end":2420318},{"filename":"/usr/share/gdal/grib2_table_4_2_0_13.csv","start":2420318,"end":2429914},{"filename":"/usr/share/gdal/jpfgdgml_WA.gfs","start":2429914,"end":2431411},{"filename":"/usr/share/gdal/grib2_table_versions.csv","start":2431411,"end":2431451},{"filename":"/usr/share/gdal/jpfgdgml_Cstline.gfs","start":2431451,"end":2432960},{"filename":"/usr/share/gdal/grib2_table_4_2_0_1.csv","start":2432960,"end":2448697},{"filename":"/usr/share/gdal/grib2_table_4_2_0_191.csv","start":2448697,"end":2458317},{"filename":"/usr/share/gdal/jpfgdgml_GCP.gfs","start":2458317,"end":2460840},{"filename":"/usr/share/gdal/ogrvrt.xsd","start":2460840,"end":2486589},{"filename":"/usr/share/gdal/grib2_table_4_2_local_HPC.csv","start":2486589,"end":2486676},{"filename":"/usr/share/gdal/jpfgdgml_AdmPt.gfs","start":2486676,"end":2488309},{"filename":"/usr/share/gdal/jpfgdgml_AdmArea.gfs","start":2488309,"end":2489949},{"filename":"/usr/share/gdal/jpfgdgml_WStrL.gfs","start":2489949,"end":2491454},{"filename":"/usr/share/gdal/grib2_center.csv","start":2491454,"end":2495625},{"filename":"/usr/share/gdal/gdalvrt.xsd","start":2495625,"end":2523196},{"filename":"/usr/share/gdal/grib2_table_4_2_3_0.csv","start":2523196,"end":2534147},{"filename":"/usr/share/gdal/gdalicon.png","start":2534147,"end":2536168},{"filename":"/usr/share/gdal/gdalmdiminfo_output.schema.json","start":2536168,"end":2541629},{"filename":"/usr/share/gdal/grib2_table_4_2_2_5.csv","start":2541629,"end":2551142},{"filename":"/usr/share/gdal/grib2_table_4_2_4_8.csv","start":2551142,"end":2560828},{"filename":"/usr/share/gdal/grib2_table_4_2_0_4.csv","start":2560828,"end":2571139},{"filename":"/usr/share/gdal/grib2_table_4_2_4_3.csv","start":2571139,"end":2580861},{"filename":"/usr/share/gdal/grib2_table_4_2_1_0.csv","start":2580861,"end":2591003},{"filename":"/usr/share/gdal/grib2_table_4_2_3_4.csv","start":2591003,"end":2592054},{"filename":"/usr/share/gdal/jpfgdgml_AdmBdry.gfs","start":2592054,"end":2593436},{"filename":"/usr/share/gdal/grib2_table_4_2_local_Canada.csv","start":2593436,"end":2593769},{"filename":"/usr/share/gdal/pdfcomposition.xsd","start":2593769,"end":2628103},{"filename":"/usr/share/proj/proj.ini","start":2628103,"end":2629153},{"filename":"/usr/share/proj/ITRF2000","start":2629153,"end":2631252},{"filename":"/usr/share/proj/projjson.schema.json","start":2631252,"end":2668530},{"filename":"/usr/share/proj/nad83","start":2668530,"end":2685123},{"filename":"/usr/share/proj/ITRF2014","start":2685123,"end":2688612},{"filename":"/usr/share/proj/other.extra","start":2688612,"end":2692527},{"filename":"/usr/share/proj/deformation_model.schema.json","start":2692527,"end":2710198},{"filename":"/usr/share/proj/nad27","start":2710198,"end":2729733},{"filename":"/usr/share/proj/triangulation.schema.json","start":2729733,"end":2738136},{"filename":"/usr/share/proj/nad.lst","start":2738136,"end":2744521},{"filename":"/usr/share/proj/GL27","start":2744521,"end":2745249},{"filename":"/usr/share/proj/world","start":2745249,"end":2752328},{"filename":"/usr/share/proj/CH","start":2752328,"end":2753425},{"filename":"/usr/share/proj/ITRF2008","start":2753425,"end":2759105},{"filename":"/usr/share/proj/proj.db","start":2759105,"end":11037121}],"remote_package_size":11037121});})();var moduleOverrides=Object.assign({},Module);var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=typeof window=="object";var ENVIRONMENT_IS_WORKER=typeof importScripts=="function";var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary;function logExceptionOnExit(e){if(e instanceof ExitStatus)return;let toLog=e;err("exiting due to exception: "+toLog);}var fs;var nodePath;var requireNodeFS;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require$$1__default["default"].dirname(scriptDirectory)+"/";}else {scriptDirectory=__dirname+"/";}requireNodeFS=()=>{if(!nodePath){fs=require$$0__default["default"];nodePath=require$$1__default["default"];}};read_=function shell_read(filename,binary){requireNodeFS();filename=nodePath["normalize"](filename);return fs.readFileSync(filename,binary?undefined:"utf8")};readBinary=filename=>{var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret);}return ret};readAsync=(filename,onload,onerror)=>{requireNodeFS();filename=nodePath["normalize"](filename);fs.readFile(filename,function(err,data){if(err)onerror(err);else onload(data.buffer);});};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/");}process["argv"].slice(2);process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",function(reason){throw reason});quit_=(status,toThrow)=>{if(keepRuntimeAlive()){process["exitCode"]=status;throw toThrow}logExceptionOnExit(toThrow);process["exit"](status);};Module["inspect"]=function(){return "[Emscripten Module object]"};}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href;}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src;}if(_scriptDir){scriptDirectory=_scriptDir;}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1);}else {scriptDirectory="";}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)};}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror();};xhr.onerror=onerror;xhr.send(null);};}}else;var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"]);if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var tempRet0=0;var setTempRet0=value=>{tempRet0=value;};var getTempRet0=()=>tempRet0;var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected");}var wasmMemory;var ABORT=false;function assert(condition,text){if(!condition){abort(text);}}var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}else {var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2;}else {u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63;}if(u0<65536){str+=String.fromCharCode(u0);}else {var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023);}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023;}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u;}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63;}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;}else {if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++;}else if(c<=2047){len+=2;}else if(c>=55296&&c<=57343){len+=4;++i;}else {len+=3;}}return len}var buffer,HEAP8,HEAPU8,HEAP16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf);}Module["INITIAL_MEMORY"]||536870912;var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];function keepRuntimeAlive(){return noExitRuntime}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift());}}callRuntimeCallbacks(__ATPRERUN__);}function initRuntime(){if(!Module["noFSInit"]&&!FS.init.initialized)FS.init();FS.ignorePermissions=false;PIPEFS.root=FS.mount(PIPEFS,{},null);callRuntimeCallbacks(__ATINIT__);}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift());}}callRuntimeCallbacks(__ATPOSTRUN__);}function addOnPreRun(cb){__ATPRERUN__.unshift(cb);}function addOnInit(cb){__ATINIT__.unshift(cb);}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb);}var runDependencies=0;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies);}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies);}if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback();}}}function abort(what){{if(Module["onAbort"]){Module["onAbort"](what);}}what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile;wasmBinaryFile="gdal3WebAssembly.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile);}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}else {throw "both async and sync fetching of the wasm failed"}}catch(err){abort(err);}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw "failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else {if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response));},reject);})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["Re"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["Eg"];addOnInit(Module["asm"]["Se"]);removeRunDependency();}addRunDependency();function receiveInstantiationResult(result){receiveInstance(result["instance"]);}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason);})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&!ENVIRONMENT_IS_NODE&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else {return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync().catch(readyPromiseReject);return {}}var tempDouble;var tempI64;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status;}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module);}}function getValue(ptr,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];case"*":return HEAPU32[ptr>>2];default:abort("invalid type for getValue: "+type);}return null}function setValue(ptr,value,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math.abs(tempDouble)>=1?tempDouble>0?(Math.min(+Math.floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;case"*":HEAPU32[ptr>>2]=value;break;default:abort("invalid type for setValue: "+type);}}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer);}function ___assert_fail(condition,filename,line,func){abort("Assertion failed: "+UTF8ToString(condition)+", at: "+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"]);}var wasmTableMirror=[];function getWasmTableEntry(funcPtr){var func=wasmTableMirror[funcPtr];if(!func){if(funcPtr>=wasmTableMirror.length)wasmTableMirror.length=funcPtr+1;wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr);}return func}function ___call_sighandler(fp,sig){getWasmTableEntry(fp)(sig);}function ___cxa_allocate_exception(size){return _malloc(size+24)+24}var exceptionCaught=[];function exception_addRef(info){info.add_ref();}var uncaughtExceptionCount=0;function ___cxa_begin_catch(ptr){var info=new ExceptionInfo(ptr);if(!info.get_caught()){info.set_caught(true);uncaughtExceptionCount--;}info.set_rethrown(false);exceptionCaught.push(info);exception_addRef(info);return info.get_exception_ptr()}function ___cxa_call_unexpected(exception){err("Unexpected exception thrown, this is not properly supported - aborting");ABORT=true;throw exception}var exceptionLast=0;function ExceptionInfo(excPtr){this.excPtr=excPtr;this.ptr=excPtr-24;this.set_type=function(type){HEAPU32[this.ptr+4>>2]=type;};this.get_type=function(){return HEAPU32[this.ptr+4>>2]};this.set_destructor=function(destructor){HEAPU32[this.ptr+8>>2]=destructor;};this.get_destructor=function(){return HEAPU32[this.ptr+8>>2]};this.set_refcount=function(refcount){HEAP32[this.ptr>>2]=refcount;};this.set_caught=function(caught){caught=caught?1:0;HEAP8[this.ptr+12>>0]=caught;};this.get_caught=function(){return HEAP8[this.ptr+12>>0]!=0};this.set_rethrown=function(rethrown){rethrown=rethrown?1:0;HEAP8[this.ptr+13>>0]=rethrown;};this.get_rethrown=function(){return HEAP8[this.ptr+13>>0]!=0};this.init=function(type,destructor){this.set_adjusted_ptr(0);this.set_type(type);this.set_destructor(destructor);this.set_refcount(0);this.set_caught(false);this.set_rethrown(false);};this.add_ref=function(){var value=HEAP32[this.ptr>>2];HEAP32[this.ptr>>2]=value+1;};this.release_ref=function(){var prev=HEAP32[this.ptr>>2];HEAP32[this.ptr>>2]=prev-1;return prev===1};this.set_adjusted_ptr=function(adjustedPtr){HEAPU32[this.ptr+16>>2]=adjustedPtr;};this.get_adjusted_ptr=function(){return HEAPU32[this.ptr+16>>2]};this.get_exception_ptr=function(){var isPointer=___cxa_is_pointer_type(this.get_type());if(isPointer){return HEAPU32[this.excPtr>>2]}var adjusted=this.get_adjusted_ptr();if(adjusted!==0)return adjusted;return this.excPtr};}function ___cxa_free_exception(ptr){return _free(new ExceptionInfo(ptr).ptr)}function exception_decRef(info){if(info.release_ref()&&!info.get_rethrown()){var destructor=info.get_destructor();if(destructor){getWasmTableEntry(destructor)(info.excPtr);}___cxa_free_exception(info.excPtr);}}function ___cxa_end_catch(){_setThrew(0);var info=exceptionCaught.pop();exception_decRef(info);exceptionLast=0;}function ___resumeException(ptr){if(!exceptionLast){exceptionLast=ptr;}throw ptr}function ___cxa_find_matching_catch_2(){var thrown=exceptionLast;if(!thrown){setTempRet0(0);return 0}var info=new ExceptionInfo(thrown);info.set_adjusted_ptr(thrown);var thrownType=info.get_type();if(!thrownType){setTempRet0(0);return thrown}var typeArray=Array.prototype.slice.call(arguments);for(var i=0;i<typeArray.length;i++){var caughtType=typeArray[i];if(caughtType===0||caughtType===thrownType){break}var adjusted_ptr_addr=info.ptr+16;if(___cxa_can_catch(caughtType,thrownType,adjusted_ptr_addr)){setTempRet0(caughtType);return thrown}}setTempRet0(thrownType);return thrown}function ___cxa_find_matching_catch_3(){var thrown=exceptionLast;if(!thrown){setTempRet0(0);return 0}var info=new ExceptionInfo(thrown);info.set_adjusted_ptr(thrown);var thrownType=info.get_type();if(!thrownType){setTempRet0(0);return thrown}var typeArray=Array.prototype.slice.call(arguments);for(var i=0;i<typeArray.length;i++){var caughtType=typeArray[i];if(caughtType===0||caughtType===thrownType){break}var adjusted_ptr_addr=info.ptr+16;if(___cxa_can_catch(caughtType,thrownType,adjusted_ptr_addr)){setTempRet0(caughtType);return thrown}}setTempRet0(thrownType);return thrown}function ___cxa_find_matching_catch_4(){var thrown=exceptionLast;if(!thrown){setTempRet0(0);return 0}var info=new ExceptionInfo(thrown);info.set_adjusted_ptr(thrown);var thrownType=info.get_type();if(!thrownType){setTempRet0(0);return thrown}var typeArray=Array.prototype.slice.call(arguments);for(var i=0;i<typeArray.length;i++){var caughtType=typeArray[i];if(caughtType===0||caughtType===thrownType){break}var adjusted_ptr_addr=info.ptr+16;if(___cxa_can_catch(caughtType,thrownType,adjusted_ptr_addr)){setTempRet0(caughtType);return thrown}}setTempRet0(thrownType);return thrown}function ___cxa_rethrow(){var info=exceptionCaught.pop();if(!info){abort("no exception to throw");}var ptr=info.excPtr;if(!info.get_rethrown()){exceptionCaught.push(info);info.set_rethrown(true);info.set_caught(false);uncaughtExceptionCount++;}exceptionLast=ptr;throw ptr}function ___cxa_throw(ptr,type,destructor){var info=new ExceptionInfo(ptr);info.init(type,destructor);exceptionLast=ptr;uncaughtExceptionCount++;throw ptr}function ___cxa_uncaught_exceptions(){return uncaughtExceptionCount}var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1);}else if(last===".."){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}}if(allowAboveRoot){for(;up;up--){parts.unshift("..");}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.substr(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path=".";}if(path&&trailingSlash){path+="/";}return (isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return "."}if(dir){dir=dir.substr(0,dir.length-1);}return root+dir},basename:path=>{if(path==="/")return "/";path=PATH.normalize(path);path=path.replace(/\/$/,"");var lastSlash=path.lastIndexOf("/");if(lastSlash===-1)return path;return path.substr(lastSlash+1)},join:function(){var paths=Array.prototype.slice.call(arguments,0);return PATH.normalize(paths.join("/"))},join2:(l,r)=>{return PATH.normalize(l+"/"+r)}};function getRandomDevice(){if(typeof crypto=="object"&&typeof crypto["getRandomValues"]=="function"){var randomBuffer=new Uint8Array(1);return function(){crypto.getRandomValues(randomBuffer);return randomBuffer[0]}}else if(ENVIRONMENT_IS_NODE){try{var crypto_module=require("crypto");return function(){return crypto_module["randomBytes"](1)[0]}}catch(e){}}return function(){abort("randomDevice");}}var PATH_FS={resolve:function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return ""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path);}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return (resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).substr(1);to=PATH_FS.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return [];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..");}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}var TTY={ttys:[],init:function(){},shutdown:function(){},register:function(dev,ops){TTY.ttys[dev]={input:[],output:[],ops:ops};FS.registerDevice(dev,TTY.stream_ops);},stream_ops:{open:function(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false;},close:function(stream){stream.tty.ops.flush(stream.tty);},flush:function(stream){stream.tty.ops.flush(stream.tty);},read:function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty);}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result;}if(bytesRead){stream.node.timestamp=Date.now();}return bytesRead},write:function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i]);}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.timestamp=Date.now();}return i}},default_tty_ops:{get_char:function(tty){if(!tty.input.length){var result=null;if(ENVIRONMENT_IS_NODE){var BUFSIZE=256;var buf=Buffer.alloc(BUFSIZE);var bytesRead=0;try{bytesRead=fs.readSync(process.stdin.fd,buf,0,BUFSIZE,-1);}catch(e){if(e.toString().includes("EOF"))bytesRead=0;else throw e}if(bytesRead>0){result=buf.slice(0,bytesRead).toString("utf-8");}else {result=null;}}else if(typeof window!="undefined"&&typeof window.prompt=="function"){result=window.prompt("Input: ");if(result!==null){result+="\n";}}else if(typeof readline=="function"){result=readline();if(result!==null){result+="\n";}}if(!result){return null}tty.input=intArrayFromString(result,true);}return tty.input.shift()},put_char:function(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output,0));tty.output=[];}else {if(val!=0)tty.output.push(val);}},flush:function(tty){if(tty.output&&tty.output.length>0){out(UTF8ArrayToString(tty.output,0));tty.output=[];}}},default_tty1_ops:{put_char:function(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output,0));tty.output=[];}else {if(val!=0)tty.output.push(val);}},flush:function(tty){if(tty.output&&tty.output.length>0){err(UTF8ArrayToString(tty.output,0));tty.output=[];}}}};function zeroMemory(address,size){HEAPU8.fill(0,address,address+size);}function alignMemory(size,alignment){return Math.ceil(size/alignment)*alignment}function mmapAlloc(size){size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(!ptr)return 0;zeroMemory(ptr,size);return ptr}var MEMFS={ops_table:null,mount:function(mount){return MEMFS.createNode(null,"/",16384|511,0)},createNode:function(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}if(!MEMFS.ops_table){MEMFS.ops_table={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,allocate:MEMFS.stream_ops.allocate,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};}var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={};}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null;}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream;}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream;}node.timestamp=Date.now();if(parent){parent.contents[name]=node;parent.timestamp=node.timestamp;}return node},getFileDataAsTypedArray:function(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage:function(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0);},resizeFileStorage:function(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0;}else {var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)));}node.usedBytes=newSize;}},node_ops:{getattr:function(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096;}else if(FS.isFile(node.mode)){attr.size=node.usedBytes;}else if(FS.isLink(node.mode)){attr.size=node.link.length;}else {attr.size=0;}attr.atime=new Date(node.timestamp);attr.mtime=new Date(node.timestamp);attr.ctime=new Date(node.timestamp);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr:function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode;}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp;}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size);}},lookup:function(parent,name){throw FS.genericErrors[44]},mknod:function(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename:function(old_node,new_dir,new_name){if(FS.isDir(old_node.mode)){var new_node;try{new_node=FS.lookupNode(new_dir,new_name);}catch(e){}if(new_node){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}}delete old_node.parent.contents[old_node.name];old_node.parent.timestamp=Date.now();old_node.name=new_name;new_dir.contents[new_name]=old_node;new_dir.timestamp=old_node.parent.timestamp;old_node.parent=new_dir;},unlink:function(parent,name){delete parent.contents[name];parent.timestamp=Date.now();},rmdir:function(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.timestamp=Date.now();},readdir:function(node){var entries=[".",".."];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key);}return entries},symlink:function(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink:function(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read:function(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset);}else {for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i];}return size},write:function(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false;}if(!length)return 0;var node=stream.node;node.timestamp=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position);}else {for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i];}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek:function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position;}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes;}}if(position<0){throw new FS.ErrnoError(28)}return position},allocate:function(stream,offset,length){MEMFS.expandFileStorage(stream.node,offset+length);stream.node.usedBytes=Math.max(stream.node.usedBytes,offset+length);},mmap:function(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents.buffer===buffer){allocated=false;ptr=contents.byteOffset;}else {if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length);}else {contents=Array.prototype.slice.call(contents,position,position+length);}}allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}HEAP8.set(contents,ptr);}return {ptr:ptr,allocated:allocated}},msync:function(stream,buffer,offset,length,mmapFlags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(mmapFlags&2){return 0}MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};function asyncLoad(url,onload,onerror,noRunDep){var dep=!noRunDep?getUniqueRunDependency("al "+url):"";readAsync(url,function(arrayBuffer){assert(arrayBuffer,'Loading data file "'+url+'" failed (no arrayBuffer).');onload(new Uint8Array(arrayBuffer));if(dep)removeRunDependency();},function(event){if(onerror){onerror();}else {throw 'Loading data file "'+url+'" failed.'}});if(dep)addRunDependency();}var ERRNO_CODES={};var NODEFS={isWindows:false,staticInit:()=>{NODEFS.isWindows=!!process.platform.match(/^win/);var flags=process["binding"]("constants");if(flags["fs"]){flags=flags["fs"];}NODEFS.flagsForNodeMap={1024:flags["O_APPEND"],64:flags["O_CREAT"],128:flags["O_EXCL"],256:flags["O_NOCTTY"],0:flags["O_RDONLY"],2:flags["O_RDWR"],4096:flags["O_SYNC"],512:flags["O_TRUNC"],1:flags["O_WRONLY"],131072:flags["O_NOFOLLOW"]};},convertNodeCode:e=>{var code=e.code;return ERRNO_CODES[code]},mount:mount=>{return NODEFS.createNode(null,"/",NODEFS.getMode(mount.opts.root),0)},createNode:(parent,name,mode,dev)=>{if(!FS.isDir(mode)&&!FS.isFile(mode)&&!FS.isLink(mode)){throw new FS.ErrnoError(28)}var node=FS.createNode(parent,name,mode);node.node_ops=NODEFS.node_ops;node.stream_ops=NODEFS.stream_ops;return node},getMode:path=>{var stat;try{stat=fs.lstatSync(path);if(NODEFS.isWindows){stat.mode=stat.mode|(stat.mode&292)>>2;}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}return stat.mode},realPath:node=>{var parts=[];while(node.parent!==node){parts.push(node.name);node=node.parent;}parts.push(node.mount.opts.root);parts.reverse();return PATH.join.apply(null,parts)},flagsForNode:flags=>{flags&=~2097152;flags&=~2048;flags&=~32768;flags&=~524288;flags&=~65536;var newFlags=0;for(var k in NODEFS.flagsForNodeMap){if(flags&k){newFlags|=NODEFS.flagsForNodeMap[k];flags^=k;}}if(!flags){return newFlags}else {throw new FS.ErrnoError(28)}},node_ops:{getattr:node=>{var path=NODEFS.realPath(node);var stat;try{stat=fs.lstatSync(path);}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}if(NODEFS.isWindows&&!stat.blksize){stat.blksize=4096;}if(NODEFS.isWindows&&!stat.blocks){stat.blocks=(stat.size+stat.blksize-1)/stat.blksize|0;}return {dev:stat.dev,ino:stat.ino,mode:stat.mode,nlink:stat.nlink,uid:stat.uid,gid:stat.gid,rdev:stat.rdev,size:stat.size,atime:stat.atime,mtime:stat.mtime,ctime:stat.ctime,blksize:stat.blksize,blocks:stat.blocks}},setattr:(node,attr)=>{var path=NODEFS.realPath(node);try{if(attr.mode!==undefined){fs.chmodSync(path,attr.mode);node.mode=attr.mode;}if(attr.timestamp!==undefined){var date=new Date(attr.timestamp);fs.utimesSync(path,date,date);}if(attr.size!==undefined){fs.truncateSync(path,attr.size);}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}},lookup:(parent,name)=>{var path=PATH.join2(NODEFS.realPath(parent),name);var mode=NODEFS.getMode(path);return NODEFS.createNode(parent,name,mode)},mknod:(parent,name,mode,dev)=>{var node=NODEFS.createNode(parent,name,mode,dev);var path=NODEFS.realPath(node);try{if(FS.isDir(node.mode)){fs.mkdirSync(path,node.mode);}else {fs.writeFileSync(path,"",{mode:node.mode});}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}return node},rename:(oldNode,newDir,newName)=>{var oldPath=NODEFS.realPath(oldNode);var newPath=PATH.join2(NODEFS.realPath(newDir),newName);try{fs.renameSync(oldPath,newPath);}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}oldNode.name=newName;},unlink:(parent,name)=>{var path=PATH.join2(NODEFS.realPath(parent),name);try{fs.unlinkSync(path);}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}},rmdir:(parent,name)=>{var path=PATH.join2(NODEFS.realPath(parent),name);try{fs.rmdirSync(path);}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}},readdir:node=>{var path=NODEFS.realPath(node);try{return fs.readdirSync(path)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}},symlink:(parent,newName,oldPath)=>{var newPath=PATH.join2(NODEFS.realPath(parent),newName);try{fs.symlinkSync(oldPath,newPath);}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}},readlink:node=>{var path=NODEFS.realPath(node);try{path=fs.readlinkSync(path);path=nodePath.relative(nodePath.resolve(node.mount.opts.root),path);return path}catch(e){if(!e.code)throw e;if(e.code==="UNKNOWN")throw new FS.ErrnoError(28);throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}}},stream_ops:{open:stream=>{var path=NODEFS.realPath(stream.node);try{if(FS.isFile(stream.node.mode)){stream.nfd=fs.openSync(path,NODEFS.flagsForNode(stream.flags));}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}},close:stream=>{try{if(FS.isFile(stream.node.mode)&&stream.nfd){fs.closeSync(stream.nfd);}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}},read:(stream,buffer,offset,length,position)=>{if(length===0)return 0;try{return fs.readSync(stream.nfd,Buffer.from(buffer.buffer),offset,length,position)}catch(e){throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}},write:(stream,buffer,offset,length,position)=>{try{return fs.writeSync(stream.nfd,Buffer.from(buffer.buffer),offset,length,position)}catch(e){throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}},llseek:(stream,offset,whence)=>{var position=offset;if(whence===1){position+=stream.position;}else if(whence===2){if(FS.isFile(stream.node.mode)){try{var stat=fs.fstatSync(stream.nfd);position+=stat.size;}catch(e){throw new FS.ErrnoError(NODEFS.convertNodeCode(e))}}}if(position<0){throw new FS.ErrnoError(28)}return position},mmap:(stream,length,position,prot,flags)=>{if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr=mmapAlloc(length);NODEFS.stream_ops.read(stream,HEAP8,ptr,length,position);return {ptr:ptr,allocated:true}},msync:(stream,buffer,offset,length,mmapFlags)=>{if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(mmapFlags&2){return 0}NODEFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var WORKERFS={DIR_MODE:16895,FILE_MODE:33279,reader:null,mount:function(mount){assert(ENVIRONMENT_IS_WORKER);if(!WORKERFS.reader)WORKERFS.reader=new FileReaderSync;var root=WORKERFS.createNode(null,"/",WORKERFS.DIR_MODE,0);var createdParents={};function ensureParent(path){var parts=path.split("/");var parent=root;for(var i=0;i<parts.length-1;i++){var curr=parts.slice(0,i+1).join("/");if(!createdParents[curr]){createdParents[curr]=WORKERFS.createNode(parent,parts[i],WORKERFS.DIR_MODE,0);}parent=createdParents[curr];}return parent}function base(path){var parts=path.split("/");return parts[parts.length-1]}Array.prototype.forEach.call(mount.opts["files"]||[],function(file){WORKERFS.createNode(ensureParent(file.name),base(file.name),WORKERFS.FILE_MODE,0,file,file.lastModifiedDate);});(mount.opts["blobs"]||[]).forEach(function(obj){WORKERFS.createNode(ensureParent(obj["name"]),base(obj["name"]),WORKERFS.FILE_MODE,0,obj["data"]);});(mount.opts["packages"]||[]).forEach(function(pack){pack["metadata"].files.forEach(function(file){var name=file.filename.substr(1);WORKERFS.createNode(ensureParent(name),base(name),WORKERFS.FILE_MODE,0,pack["blob"].slice(file.start,file.end));});});return root},createNode:function(parent,name,mode,dev,contents,mtime){var node=FS.createNode(parent,name,mode);node.mode=mode;node.node_ops=WORKERFS.node_ops;node.stream_ops=WORKERFS.stream_ops;node.timestamp=(mtime||new Date).getTime();assert(WORKERFS.FILE_MODE!==WORKERFS.DIR_MODE);if(mode===WORKERFS.FILE_MODE){node.size=contents.size;node.contents=contents;}else {node.size=4096;node.contents={};}if(parent){parent.contents[name]=node;}return node},node_ops:{getattr:function(node){return {dev:1,ino:node.id,mode:node.mode,nlink:1,uid:0,gid:0,rdev:undefined,size:node.size,atime:new Date(node.timestamp),mtime:new Date(node.timestamp),ctime:new Date(node.timestamp),blksize:4096,blocks:Math.ceil(node.size/4096)}},setattr:function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode;}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp;}},lookup:function(parent,name){throw new FS.ErrnoError(44)},mknod:function(parent,name,mode,dev){throw new FS.ErrnoError(63)},rename:function(oldNode,newDir,newName){throw new FS.ErrnoError(63)},unlink:function(parent,name){throw new FS.ErrnoError(63)},rmdir:function(parent,name){throw new FS.ErrnoError(63)},readdir:function(node){var entries=[".",".."];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key);}return entries},symlink:function(parent,newName,oldPath){throw new FS.ErrnoError(63)},readlink:function(node){throw new FS.ErrnoError(63)}},stream_ops:{read:function(stream,buffer,offset,length,position){if(position>=stream.node.size)return 0;var chunk=stream.node.contents.slice(position,position+length);var ab=WORKERFS.reader.readAsArrayBuffer(chunk);buffer.set(new Uint8Array(ab),offset);return chunk.size},write:function(stream,buffer,offset,length,position){throw new FS.ErrnoError(29)},llseek:function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position;}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.size;}}if(position<0){throw new FS.ErrnoError(28)}return position}}};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(path,opts={})=>{path=PATH_FS.resolve(FS.cwd(),path);if(!path)return {path:"",node:null};var defaults={follow_mount:true,recurse_count:0};opts=Object.assign(defaults,opts);if(opts.recurse_count>8){throw new FS.ErrnoError(32)}var parts=PATH.normalizeArray(path.split("/").filter(p=>!!p),false);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}current=FS.lookupNode(current,parts[i]);current_path=PATH.join2(current_path,parts[i]);if(FS.isMountpoint(current)){if(!islast||islast&&opts.follow_mount){current=current.mounted.root;}}if(!islast||opts.follow){var count=0;while(FS.isLink(current.mode)){var link=FS.readlink(current_path);current_path=PATH_FS.resolve(PATH.dirname(current_path),link);var lookup=FS.lookupPath(current_path,{recurse_count:opts.recurse_count+1});current=lookup.node;if(count++>40){throw new FS.ErrnoError(32)}}}}return {path:current_path,node:current}},getPath:node=>{var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?mount+"/"+path:mount+path}path=path?node.name+"/"+path:node.name;node=node.parent;}},hashName:(parentid,name)=>{var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0;}return (parentid+hash>>>0)%FS.nameTable.length},hashAddNode:node=>{var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node;},hashRemoveNode:node=>{var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next;}else {var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next;}}},lookupNode:(parent,name)=>{var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode,parent)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode:(parent,name,mode,rdev)=>{var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode:node=>{FS.hashRemoveNode(node);},isRoot:node=>{return node===node.parent},isMountpoint:node=>{return !!node.mounted},isFile:mode=>{return (mode&61440)===32768},isDir:mode=>{return (mode&61440)===16384},isLink:mode=>{return (mode&61440)===40960},isChrdev:mode=>{return (mode&61440)===8192},isBlkdev:mode=>{return (mode&61440)===24576},isFIFO:mode=>{return (mode&61440)===4096},isSocket:mode=>{return (mode&49152)===49152},flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:str=>{var flags=FS.flagModes[str];if(typeof flags=="undefined"){throw new Error("Unknown file open mode: "+str)}return flags},flagsToPermissionString:flag=>{var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w";}return perms},nodePermissions:(node,perms)=>{if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}else if(perms.includes("w")&&!(node.mode&146)){return 2}else if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup:dir=>{var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate:(dir,name)=>{try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete:(dir,name,isdir)=>{var node;try{node=FS.lookupNode(dir,name);}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else {if(FS.isDir(node.mode)){return 31}}return 0},mayOpen:(node,flags)=>{if(!node){return 44}if(FS.isLink(node.mode)){return 32}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!=="r"||flags&512){return 31}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))},MAX_OPEN_FDS:4096,nextfd:(fd_start=0,fd_end=FS.MAX_OPEN_FDS)=>{for(var fd=fd_start;fd<=fd_end;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStream:fd=>FS.streams[fd],createStream:(stream,fd_start,fd_end)=>{if(!FS.FSStream){FS.FSStream=function(){this.shared={};};FS.FSStream.prototype={};Object.defineProperties(FS.FSStream.prototype,{object:{get:function(){return this.node},set:function(val){this.node=val;}},isRead:{get:function(){return (this.flags&2097155)!==1}},isWrite:{get:function(){return (this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}},flags:{get:function(){return this.shared.flags},set:function(val){this.shared.flags=val;}},position:{get:function(){return this.shared.position},set:function(val){this.shared.position=val;}}});}stream=Object.assign(new FS.FSStream,stream);var fd=FS.nextfd(fd_start,fd_end);stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream:fd=>{FS.streams[fd]=null;},chrdev_stream_ops:{open:stream=>{var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;if(stream.stream_ops.open){stream.stream_ops.open(stream);}},llseek:()=>{throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice:(dev,ops)=>{FS.devices[dev]={stream_ops:ops};},getDevice:dev=>FS.devices[dev],getMounts:mount=>{var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push.apply(check,m.mounts);}return mounts},syncfs:(populate,callback)=>{if(typeof populate=="function"){callback=populate;populate=false;}FS.syncFSRequests++;if(FS.syncFSRequests>1){err("warning: "+FS.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null);}}mounts.forEach(mount=>{if(!mount.type.syncfs){return done(null)}mount.type.syncfs(mount,populate,done);});},mount:(type,opts,mountpoint)=>{var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type:type,opts:opts,mountpoint:mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot;}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount);}}return mountRoot},unmount:mountpoint=>{var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);Object.keys(FS.nameTable).forEach(hash=>{var current=FS.nameTable[hash];while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current);}current=next;}});node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1);},lookup:(parent,name)=>{return parent.node_ops.lookup(parent,name)},mknod:(path,mode,dev)=>{var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name||name==="."||name===".."){throw new FS.ErrnoError(28)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},create:(path,mode)=>{mode=mode!==undefined?mode:438;mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir:(path,mode)=>{mode=mode!==undefined?mode:511;mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree:(path,mode)=>{var dirs=path.split("/");var d="";for(var i=0;i<dirs.length;++i){if(!dirs[i])continue;d+="/"+dirs[i];try{FS.mkdir(d,mode);}catch(e){if(e.errno!=20)throw e}}},mkdev:(path,mode,dev)=>{if(typeof dev=="undefined"){dev=mode;mode=438;}mode|=8192;return FS.mknod(path,mode,dev)},symlink:(oldpath,newpath)=>{if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename:(old_path,new_path)=>{var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name);}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);}catch(e){throw e}finally{FS.hashAddNode(old_node);}},rmdir:path=>{var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node);},readdir:path=>{var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node.node_ops.readdir){throw new FS.ErrnoError(54)}return node.node_ops.readdir(node)},unlink:path=>{var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node);},readlink:path=>{var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return PATH_FS.resolve(FS.getPath(link.parent),link.node_ops.readlink(link))},stat:(path,dontFollow)=>{var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;if(!node){throw new FS.ErrnoError(44)}if(!node.node_ops.getattr){throw new FS.ErrnoError(63)}return node.node_ops.getattr(node)},lstat:path=>{return FS.stat(path,true)},chmod:(path,mode,dontFollow)=>{var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node;}else {node=path;}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{mode:mode&4095|node.mode&~4095,timestamp:Date.now()});},lchmod:(path,mode)=>{FS.chmod(path,mode,true);},fchmod:(fd,mode)=>{var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}FS.chmod(stream.node,mode);},chown:(path,uid,gid,dontFollow)=>{var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node;}else {node=path;}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{timestamp:Date.now()});},lchown:(path,uid,gid)=>{FS.chown(path,uid,gid,true);},fchown:(fd,uid,gid)=>{var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}FS.chown(stream.node,uid,gid);},truncate:(path,len)=>{if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node;}else {node=path;}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}node.node_ops.setattr(node,{size:len,timestamp:Date.now()});},ftruncate:(fd,len)=>{var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.truncate(stream.node,len);},utime:(path,atime,mtime)=>{var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;node.node_ops.setattr(node,{timestamp:Math.max(atime,mtime)});},open:(path,flags,mode)=>{if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS.modeStringToFlags(flags):flags;mode=typeof mode=="undefined"?438:mode;if(flags&64){mode=mode&4095|32768;}else {mode=0;}var node;if(typeof path=="object"){node=path;}else {path=PATH.normalize(path);try{var lookup=FS.lookupPath(path,{follow:!(flags&131072)});node=lookup.node;}catch(e){}}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else {node=FS.mknod(path,mode,0);created=true;}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512;}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0);}flags&=~(128|512|131072);var stream=FS.createStream({node:node,path:FS.getPath(node),flags:flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream);}if(Module["logReadFiles"]&&!(flags&1)){if(!FS.readFiles)FS.readFiles={};if(!(path in FS.readFiles)){FS.readFiles[path]=1;}}return stream},close:stream=>{if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream);}}catch(e){throw e}finally{FS.closeStream(stream.fd);}stream.fd=null;},isClosed:stream=>{return stream.fd===null},llseek:(stream,offset,whence)=>{if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read:(stream,buffer,offset,length,position)=>{if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position;}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write:(stream,buffer,offset,length,position,canOwn)=>{if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2);}var seeking=typeof position!="undefined";if(!seeking){position=stream.position;}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},allocate:(stream,offset,length)=>{if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(offset<0||length<=0){throw new FS.ErrnoError(28)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(!FS.isFile(stream.node.mode)&&!FS.isDir(stream.node.mode)){throw new FS.ErrnoError(43)}if(!stream.stream_ops.allocate){throw new FS.ErrnoError(138)}stream.stream_ops.allocate(stream,offset,length);},mmap:(stream,length,position,prot,flags)=>{if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync:(stream,buffer,offset,length,mmapFlags)=>{if(!stream||!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},munmap:stream=>0,ioctl:(stream,cmd,arg)=>{if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile:(path,opts={})=>{opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){throw new Error('Invalid encoding type "'+opts.encoding+'"')}var ret;var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){ret=UTF8ArrayToString(buf,0);}else if(opts.encoding==="binary"){ret=buf;}FS.close(stream);return ret},writeFile:(path,data,opts={})=>{opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){var buf=new Uint8Array(lengthBytesUTF8(data)+1);var actualNumBytes=stringToUTF8Array(data,buf,0,buf.length);FS.write(stream,buf,0,actualNumBytes,undefined,opts.canOwn);}else if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn);}else {throw new Error("Unsupported data type")}FS.close(stream);},cwd:()=>FS.currentPath,chdir:path=>{var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path;},createDefaultDirectories:()=>{FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user");},createDefaultDevices:()=>{FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var random_device=getRandomDevice();FS.createDevice("/dev","random",random_device);FS.createDevice("/dev","urandom",random_device);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp");},createSpecialDirectories:()=>{FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount:()=>{var node=FS.createNode(proc_self,"fd",16384|511,73);node.node_ops={lookup:(parent,name)=>{var fd=+name;var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(8);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path}};ret.parent=ret;return ret}};return node}},{},"/proc/self/fd");},createStandardStreams:()=>{if(Module["stdin"]){FS.createDevice("/dev","stdin",Module["stdin"]);}else {FS.symlink("/dev/tty","/dev/stdin");}if(Module["stdout"]){FS.createDevice("/dev","stdout",null,Module["stdout"]);}else {FS.symlink("/dev/tty","/dev/stdout");}if(Module["stderr"]){FS.createDevice("/dev","stderr",null,Module["stderr"]);}else {FS.symlink("/dev/tty1","/dev/stderr");}FS.open("/dev/stdin",0);FS.open("/dev/stdout",1);FS.open("/dev/stderr",1);},ensureErrnoError:()=>{if(FS.ErrnoError)return;FS.ErrnoError=function ErrnoError(errno,node){this.node=node;this.setErrno=function(errno){this.errno=errno;};this.setErrno(errno);this.message="FS error";};FS.ErrnoError.prototype=new Error;FS.ErrnoError.prototype.constructor=FS.ErrnoError;[44].forEach(code=>{FS.genericErrors[code]=new FS.ErrnoError(code);FS.genericErrors[code].stack="<generic error, no stack>";});},staticInit:()=>{FS.ensureErrnoError();FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={"MEMFS":MEMFS,"NODEFS":NODEFS,"WORKERFS":WORKERFS};},init:(input,output,error)=>{FS.init.initialized=true;FS.ensureErrnoError();Module["stdin"]=input||Module["stdin"];Module["stdout"]=output||Module["stdout"];Module["stderr"]=error||Module["stderr"];FS.createStandardStreams();},quit:()=>{FS.init.initialized=false;for(var i=0;i<FS.streams.length;i++){var stream=FS.streams[i];if(!stream){continue}FS.close(stream);}},getMode:(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode},findObject:(path,dontResolveLastLink)=>{var ret=FS.analyzePath(path,dontResolveLastLink);if(ret.exists){return ret.object}else {return null}},analyzePath:(path,dontResolveLastLink)=>{try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path;}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/";}catch(e){ret.error=e.errno;}return ret},createPath:(parent,path,canRead,canWrite)=>{parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current);}catch(e){}parent=current;}return current},createFile:(parent,name,properties,canRead,canWrite)=>{var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile:(parent,name,data,canRead,canWrite,canOwn)=>{var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent;}var mode=FS.getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr;}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode);}return node},createDevice:(parent,name,input,output)=>{var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(!!input,!!output);if(!FS.createDevice.major)FS.createDevice.major=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open:stream=>{stream.seekable=false;},close:stream=>{if(output&&output.buffer&&output.buffer.length){output(10);}},read:(stream,buffer,offset,length,pos)=>{var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input();}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result;}if(bytesRead){stream.node.timestamp=Date.now();}return bytesRead},write:(stream,buffer,offset,length,pos)=>{for(var i=0;i<length;i++){try{output(buffer[offset+i]);}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.timestamp=Date.now();}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile:obj=>{if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(typeof XMLHttpRequest!="undefined"){throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else if(read_){try{obj.contents=intArrayFromString(read_(obj.url),true);obj.usedBytes=obj.contents.length;}catch(e){throw new FS.ErrnoError(29)}}else {throw new Error("Cannot load without read() or XMLHttpRequest.")}},createLazyFile:(parent,name,url,canRead,canWrite)=>{function LazyUint8Array(){this.lengthKnown=false;this.chunks=[];}LazyUint8Array.prototype.get=function LazyUint8Array_get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]};LazyUint8Array.prototype.setDataGetter=function LazyUint8Array_setDataGetter(getter){this.getter=getter;};LazyUint8Array.prototype.cacheLength=function LazyUint8Array_cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)throw new Error("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)throw new Error("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined");}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}else {return intArrayFromString(xhr.responseText||"",true)}};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end);}if(typeof lazyArray.chunks[chunkNum]=="undefined")throw new Error("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed");}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true;};if(typeof XMLHttpRequest!="undefined"){if(!ENVIRONMENT_IS_WORKER)throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var lazyArray=new LazyUint8Array;Object.defineProperties(lazyArray,{length:{get:function(){if(!this.lengthKnown){this.cacheLength();}return this._length}},chunkSize:{get:function(){if(!this.lengthKnown){this.cacheLength();}return this._chunkSize}}});var properties={isDevice:false,contents:lazyArray};}else {var properties={isDevice:false,url:url};}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents;}else if(properties.url){node.contents=null;node.url=properties.url;}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};var keys=Object.keys(node.stream_ops);keys.forEach(key=>{var fn=node.stream_ops[key];stream_ops[key]=function forceLoadLazyFile(){FS.forceLoadFile(node);return fn.apply(null,arguments)};});function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i];}}else {for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i);}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,HEAP8,ptr,length,position);return {ptr:ptr,allocated:true}};node.stream_ops=stream_ops;return node},createPreloadedFile:(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;function processData(byteArray){function finish(byteArray){if(preFinish)preFinish();if(!dontCreateFile){FS.createDataFile(parent,name,byteArray,canRead,canWrite,canOwn);}if(onload)onload();removeRunDependency();}if(Browser.handledByPreloadPlugin(byteArray,fullname,finish,()=>{if(onerror)onerror();removeRunDependency();})){return}finish(byteArray);}addRunDependency();if(typeof url=="string"){asyncLoad(url,byteArray=>processData(byteArray),onerror);}else {processData(url);}},indexedDB:()=>{return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:()=>{return "EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:(paths,onload,onerror)=>{onload=onload||(()=>{});onerror=onerror||(()=>{});var indexedDB=FS.indexedDB();try{var openRequest=indexedDB.open(FS.DB_NAME(),FS.DB_VERSION);}catch(e){return onerror(e)}openRequest.onupgradeneeded=()=>{out("creating db");var db=openRequest.result;db.createObjectStore(FS.DB_STORE_NAME);};openRequest.onsuccess=()=>{var db=openRequest.result;var transaction=db.transaction([FS.DB_STORE_NAME],"readwrite");var files=transaction.objectStore(FS.DB_STORE_NAME);var ok=0,fail=0,total=paths.length;function finish(){if(fail==0)onload();else onerror();}paths.forEach(path=>{var putRequest=files.put(FS.analyzePath(path).object.contents,path);putRequest.onsuccess=()=>{ok++;if(ok+fail==total)finish();};putRequest.onerror=()=>{fail++;if(ok+fail==total)finish();};});transaction.onerror=onerror;};openRequest.onerror=onerror;},loadFilesFromDB:(paths,onload,onerror)=>{onload=onload||(()=>{});onerror=onerror||(()=>{});var indexedDB=FS.indexedDB();try{var openRequest=indexedDB.open(FS.DB_NAME(),FS.DB_VERSION);}catch(e){return onerror(e)}openRequest.onupgradeneeded=onerror;openRequest.onsuccess=()=>{var db=openRequest.result;try{var transaction=db.transaction([FS.DB_STORE_NAME],"readonly");}catch(e){onerror(e);return}var files=transaction.objectStore(FS.DB_STORE_NAME);var ok=0,fail=0,total=paths.length;function finish(){if(fail==0)onload();else onerror();}paths.forEach(path=>{var getRequest=files.get(path);getRequest.onsuccess=()=>{if(FS.analyzePath(path).exists){FS.unlink(path);}FS.createDataFile(PATH.dirname(path),PATH.basename(path),getRequest.result,true,true,true);ok++;if(ok+fail==total)finish();};getRequest.onerror=()=>{fail++;if(ok+fail==total)finish();};});transaction.onerror=onerror;};openRequest.onerror=onerror;}};var SYSCALLS={DEFAULT_POLLMASK:5,calculateAt:function(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd();}else {var dirstream=FS.getStream(dirfd);if(!dirstream)throw new FS.ErrnoError(8);dir=dirstream.path;}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return PATH.join2(dir,path)},doStat:function(func,path,buf){try{var stat=func(path);}catch(e){if(e&&e.node&&PATH.normalize(path)!==PATH.normalize(FS.getPath(e.node))){return -54}throw e}HEAP32[buf>>2]=stat.dev;HEAP32[buf+4>>2]=0;HEAP32[buf+8>>2]=stat.ino;HEAP32[buf+12>>2]=stat.mode;HEAP32[buf+16>>2]=stat.nlink;HEAP32[buf+20>>2]=stat.uid;HEAP32[buf+24>>2]=stat.gid;HEAP32[buf+28>>2]=stat.rdev;HEAP32[buf+32>>2]=0;tempI64=[stat.size>>>0,(tempDouble=stat.size,+Math.abs(tempDouble)>=1?tempDouble>0?(Math.min(+Math.floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAP32[buf+48>>2]=4096;HEAP32[buf+52>>2]=stat.blocks;HEAP32[buf+56>>2]=stat.atime.getTime()/1e3|0;HEAP32[buf+64>>2]=0;HEAP32[buf+72>>2]=stat.mtime.getTime()/1e3|0;HEAP32[buf+80>>2]=0;HEAP32[buf+88>>2]=stat.ctime.getTime()/1e3|0;HEAP32[buf+96>>2]=0;tempI64=[stat.ino>>>0,(tempDouble=stat.ino,+Math.abs(tempDouble)>=1?tempDouble>0?(Math.min(+Math.floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+104>>2]=tempI64[0],HEAP32[buf+108>>2]=tempI64[1];return 0},doMsync:function(addr,stream,len,flags,offset){var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags);},varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},getStreamFromFD:function(fd){var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(8);return stream}};function ___syscall_chmod(path,mode){try{path=SYSCALLS.getStr(path);FS.chmod(path,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_faccessat(dirfd,path,amode,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(amode&~7){return -28}var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node){return -44}var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return -2}return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function convertI32PairToI53Checked(lo,hi){return hi+2097152>>>0<4194305-!!lo?(lo>>>0)+hi*4294967296:NaN}function ___syscall_fallocate(fd,mode,offset_low,offset_high,len_low,len_high){try{var offset=convertI32PairToI53Checked(offset_low,offset_high);if(isNaN(offset))return -61;var len=convertI32PairToI53Checked(len_low,len_high);if(isNaN(len))return -61;var stream=SYSCALLS.getStreamFromFD(fd);FS.allocate(stream,offset,len);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_fchmod(fd,mode){try{FS.fchmod(fd,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_fchown32(fd,owner,group){try{FS.fchown(fd,owner,group);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function setErrNo(value){HEAP32[___errno_location()>>2]=value;return value}function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=SYSCALLS.get();if(arg<0){return -28}var newStream;newStream=FS.createStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=SYSCALLS.get();stream.flags|=arg;return 0}case 5:{var arg=SYSCALLS.get();var offset=0;HEAP16[arg+offset>>1]=2;return 0}case 6:case 7:return 0;case 16:case 8:return -28;case 9:setErrNo(28);return -1;default:{return -28}}}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_fdatasync(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_fstat64(fd,buf){try{var stream=SYSCALLS.getStreamFromFD(fd);return SYSCALLS.doStat(FS.stat,stream.path,buf)}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_ftruncate64(fd,length_low,length_high){try{var length=convertI32PairToI53Checked(length_low,length_high);if(isNaN(length))return -61;FS.ftruncate(fd,length);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_getcwd(buf,size){try{if(size===0)return -28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return -68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_getdents64(fd,dirp,count){try{var stream=SYSCALLS.getStreamFromFD(fd);if(!stream.getdents){stream.getdents=FS.readdir(stream.path);}var struct_size=280;var pos=0;var off=FS.llseek(stream,0,1);var idx=Math.floor(off/struct_size);while(idx<stream.getdents.length&&pos+struct_size<=count){var id;var type;var name=stream.getdents[idx];if(name==="."){id=stream.node.id;type=4;}else if(name===".."){var lookup=FS.lookupPath(stream.path,{parent:true});id=lookup.node.id;type=4;}else {var child=FS.lookupNode(stream.node,name);id=child.id;type=FS.isChrdev(child.mode)?2:FS.isDir(child.mode)?4:FS.isLink(child.mode)?10:8;}tempI64=[id>>>0,(tempDouble=id,+Math.abs(tempDouble)>=1?tempDouble>0?(Math.min(+Math.floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[dirp+pos>>2]=tempI64[0],HEAP32[dirp+pos+4>>2]=tempI64[1];tempI64=[(idx+1)*struct_size>>>0,(tempDouble=(idx+1)*struct_size,+Math.abs(tempDouble)>=1?tempDouble>0?(Math.min(+Math.floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[dirp+pos+8>>2]=tempI64[0],HEAP32[dirp+pos+12>>2]=tempI64[1];HEAP16[dirp+pos+16>>1]=280;HEAP8[dirp+pos+18>>0]=type;stringToUTF8(name,dirp+pos+19,256);pos+=struct_size;idx+=1;}FS.llseek(stream,idx*struct_size,0);return pos}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_ioctl(fd,op,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(op){case 21509:case 21505:{if(!stream.tty)return -59;return 0}case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:{if(!stream.tty)return -59;return 0}case 21519:{if(!stream.tty)return -59;var argp=SYSCALLS.get();HEAP32[argp>>2]=0;return 0}case 21520:{if(!stream.tty)return -59;return -28}case 21531:{var argp=SYSCALLS.get();return FS.ioctl(stream,op,argp)}case 21523:{if(!stream.tty)return -59;return 0}case 21524:{if(!stream.tty)return -59;return 0}default:abort("bad ioctl syscall "+op);}}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_lstat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.doStat(FS.lstat,path,buf)}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_mkdirat(dirfd,path,mode){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);path=PATH.normalize(path);if(path[path.length-1]==="/")path=path.substr(0,path.length-1);FS.mkdir(path,mode,0);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~4352;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.doStat(nofollow?FS.lstat:FS.stat,path,buf)}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?SYSCALLS.get():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}var PIPEFS={BUCKET_BUFFER_SIZE:8192,mount:function(mount){return FS.createNode(null,"/",16384|511,0)},createPipe:function(){var pipe={buckets:[],refcnt:2};pipe.buckets.push({buffer:new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),offset:0,roffset:0});var rName=PIPEFS.nextname();var wName=PIPEFS.nextname();var rNode=FS.createNode(PIPEFS.root,rName,4096,0);var wNode=FS.createNode(PIPEFS.root,wName,4096,0);rNode.pipe=pipe;wNode.pipe=pipe;var readableStream=FS.createStream({path:rName,node:rNode,flags:0,seekable:false,stream_ops:PIPEFS.stream_ops});rNode.stream=readableStream;var writableStream=FS.createStream({path:wName,node:wNode,flags:1,seekable:false,stream_ops:PIPEFS.stream_ops});wNode.stream=writableStream;return {readable_fd:readableStream.fd,writable_fd:writableStream.fd}},stream_ops:{poll:function(stream){var pipe=stream.node.pipe;if((stream.flags&2097155)===1){return 256|4}else {if(pipe.buckets.length>0){for(var i=0;i<pipe.buckets.length;i++){var bucket=pipe.buckets[i];if(bucket.offset-bucket.roffset>0){return 64|1}}}}return 0},ioctl:function(stream,request,varargs){return 28},fsync:function(stream){return 28},read:function(stream,buffer,offset,length,position){var pipe=stream.node.pipe;var currentLength=0;for(var i=0;i<pipe.buckets.length;i++){var bucket=pipe.buckets[i];currentLength+=bucket.offset-bucket.roffset;}assert(buffer instanceof ArrayBuffer||ArrayBuffer.isView(buffer));var data=buffer.subarray(offset,offset+length);if(length<=0){return 0}if(currentLength==0){throw new FS.ErrnoError(6)}var toRead=Math.min(currentLength,length);var totalRead=toRead;var toRemove=0;for(var i=0;i<pipe.buckets.length;i++){var currBucket=pipe.buckets[i];var bucketSize=currBucket.offset-currBucket.roffset;if(toRead<=bucketSize){var tmpSlice=currBucket.buffer.subarray(currBucket.roffset,currBucket.offset);if(toRead<bucketSize){tmpSlice=tmpSlice.subarray(0,toRead);currBucket.roffset+=toRead;}else {toRemove++;}data.set(tmpSlice);break}else {var tmpSlice=currBucket.buffer.subarray(currBucket.roffset,currBucket.offset);data.set(tmpSlice);data=data.subarray(tmpSlice.byteLength);toRead-=tmpSlice.byteLength;toRemove++;}}if(toRemove&&toRemove==pipe.buckets.length){toRemove--;pipe.buckets[toRemove].offset=0;pipe.buckets[toRemove].roffset=0;}pipe.buckets.splice(0,toRemove);return totalRead},write:function(stream,buffer,offset,length,position){var pipe=stream.node.pipe;assert(buffer instanceof ArrayBuffer||ArrayBuffer.isView(buffer));var data=buffer.subarray(offset,offset+length);var dataLen=data.byteLength;if(dataLen<=0){return 0}var currBucket=null;if(pipe.buckets.length==0){currBucket={buffer:new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),offset:0,roffset:0};pipe.buckets.push(currBucket);}else {currBucket=pipe.buckets[pipe.buckets.length-1];}assert(currBucket.offset<=PIPEFS.BUCKET_BUFFER_SIZE);var freeBytesInCurrBuffer=PIPEFS.BUCKET_BUFFER_SIZE-currBucket.offset;if(freeBytesInCurrBuffer>=dataLen){currBucket.buffer.set(data,currBucket.offset);currBucket.offset+=dataLen;return dataLen}else if(freeBytesInCurrBuffer>0){currBucket.buffer.set(data.subarray(0,freeBytesInCurrBuffer),currBucket.offset);currBucket.offset+=freeBytesInCurrBuffer;data=data.subarray(freeBytesInCurrBuffer,data.byteLength);}var numBuckets=data.byteLength/PIPEFS.BUCKET_BUFFER_SIZE|0;var remElements=data.byteLength%PIPEFS.BUCKET_BUFFER_SIZE;for(var i=0;i<numBuckets;i++){var newBucket={buffer:new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),offset:PIPEFS.BUCKET_BUFFER_SIZE,roffset:0};pipe.buckets.push(newBucket);newBucket.buffer.set(data.subarray(0,PIPEFS.BUCKET_BUFFER_SIZE));data=data.subarray(PIPEFS.BUCKET_BUFFER_SIZE,data.byteLength);}if(remElements>0){var newBucket={buffer:new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),offset:data.byteLength,roffset:0};pipe.buckets.push(newBucket);newBucket.buffer.set(data);}return dataLen},close:function(stream){var pipe=stream.node.pipe;pipe.refcnt--;if(pipe.refcnt===0){pipe.buckets=null;}}},nextname:function(){if(!PIPEFS.nextname.current){PIPEFS.nextname.current=0;}return "pipe["+PIPEFS.nextname.current+++"]"}};function ___syscall_pipe(fdPtr){try{if(fdPtr==0){throw new FS.ErrnoError(21)}var res=PIPEFS.createPipe();HEAP32[fdPtr>>2]=res.readable_fd;HEAP32[fdPtr+4>>2]=res.writable_fd;return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_readlinkat(dirfd,path,buf,bufsize){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(bufsize<=0)return -28;var ret=FS.readlink(path);var len=Math.min(bufsize,lengthBytesUTF8(ret));var endChar=HEAP8[buf+len];stringToUTF8(ret,buf,bufsize+1);HEAP8[buf+len]=endChar;return len}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_renameat(olddirfd,oldpath,newdirfd,newpath){try{oldpath=SYSCALLS.getStr(oldpath);newpath=SYSCALLS.getStr(newpath);oldpath=SYSCALLS.calculateAt(olddirfd,oldpath);newpath=SYSCALLS.calculateAt(newdirfd,newpath);FS.rename(oldpath,newpath);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_rmdir(path){try{path=SYSCALLS.getStr(path);FS.rmdir(path);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_stat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.doStat(FS.stat,path,buf)}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_statfs64(path,size,buf){try{path=SYSCALLS.getStr(path);HEAP32[buf+4>>2]=4096;HEAP32[buf+40>>2]=4096;HEAP32[buf+8>>2]=1e6;HEAP32[buf+12>>2]=5e5;HEAP32[buf+16>>2]=5e5;HEAP32[buf+20>>2]=FS.nextInode;HEAP32[buf+24>>2]=1e6;HEAP32[buf+28>>2]=42;HEAP32[buf+44>>2]=2;HEAP32[buf+36>>2]=255;return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_unlinkat(dirfd,path,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(flags===0){FS.unlink(path);}else if(flags===512){FS.rmdir(path);}else {abort("Invalid flags passed to unlinkat");}return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function ___syscall_utimensat(dirfd,path,times,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path,true);if(!times){var atime=Date.now();var mtime=atime;}else {var seconds=HEAP32[times>>2];var nanoseconds=HEAP32[times+8>>2];atime=seconds*1e3+nanoseconds/(1e3*1e3);times+=16;seconds=HEAP32[times>>2];nanoseconds=HEAP32[times+8>>2];mtime=seconds*1e3+nanoseconds/(1e3*1e3);}FS.utime(path,atime,mtime);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function __dlinit(main_dso_handle){}var dlopenMissingError="To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking";function __dlopen_js(filename,flag){abort(dlopenMissingError);}function __dlsym_js(handle,symbol){abort(dlopenMissingError);}function __emscripten_date_now(){return Date.now()}function __emscripten_throw_longjmp(){throw Infinity}function __localtime_js(time,tmPtr){var date=new Date(HEAP32[time>>2]*1e3);HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getDay();var start=new Date(date.getFullYear(),0,1);var yday=(date.getTime()-start.getTime())/(1e3*60*60*24)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr+36>>2]=-(date.getTimezoneOffset()*60);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;HEAP32[tmPtr+32>>2]=dst;}function __mktime_js(tmPtr){var date=new Date(HEAP32[tmPtr+20>>2]+1900,HEAP32[tmPtr+16>>2],HEAP32[tmPtr+12>>2],HEAP32[tmPtr+8>>2],HEAP32[tmPtr+4>>2],HEAP32[tmPtr>>2],0);var dst=HEAP32[tmPtr+32>>2];var guessedOffset=date.getTimezoneOffset();var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dstOffset=Math.min(winterOffset,summerOffset);if(dst<0){HEAP32[tmPtr+32>>2]=Number(summerOffset!=winterOffset&&dstOffset==guessedOffset);}else if(dst>0!=(dstOffset==guessedOffset)){var nonDstOffset=Math.max(winterOffset,summerOffset);var trueOffset=dst>0?dstOffset:nonDstOffset;date.setTime(date.getTime()+(trueOffset-guessedOffset)*6e4);}HEAP32[tmPtr+24>>2]=date.getDay();var yday=(date.getTime()-start.getTime())/(1e3*60*60*24)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();return date.getTime()/1e3|0}function __mmap_js(len,prot,flags,fd,off,allocated){try{var stream=FS.getStream(fd);if(!stream)return -8;var res=FS.mmap(stream,len,off,prot,flags);var ptr=res.ptr;HEAP32[allocated>>2]=res.allocated;return ptr}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset){try{var stream=FS.getStream(fd);if(stream){if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset);}FS.munmap(stream);}}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return -e.errno}}function allocateUTF8(str){var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8Array(str,HEAP8,ret,size);return ret}function _tzset_impl(timezone,daylight,tzname){var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAP32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);function extractZone(date){var match=date.toTimeString().match(/\(([A-Za-z ]+)\)$/);return match?match[1]:"GMT"}var winterName=extractZone(winter);var summerName=extractZone(summer);var winterNamePtr=allocateUTF8(winterName);var summerNamePtr=allocateUTF8(summerName);if(summerOffset<winterOffset){HEAPU32[tzname>>2]=winterNamePtr;HEAPU32[tzname+4>>2]=summerNamePtr;}else {HEAPU32[tzname>>2]=summerNamePtr;HEAPU32[tzname+4>>2]=winterNamePtr;}}function __tzset_js(timezone,daylight,tzname){if(__tzset_js.called)return;__tzset_js.called=true;_tzset_impl(timezone,daylight,tzname);}function _abort(){abort("");}function getHeapMax(){return 2147483648}function _emscripten_get_heap_max(){return getHeapMax()}var _emscripten_get_now;if(ENVIRONMENT_IS_NODE){_emscripten_get_now=()=>{var t=process["hrtime"]();return t[0]*1e3+t[1]/1e6};}else _emscripten_get_now=()=>performance.now();function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num);}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}let alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}var ENV={};function getExecutableName(){return thisProgram||"./this.program"}function getEnvStrings(){if(!getEnvStrings.strings){var lang=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8";var env={"USER":"web_user","LOGNAME":"web_user","PATH":"/","PWD":"/","HOME":"/home/web_user","LANG":lang,"_":getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x];}var strings=[];for(var x in env){strings.push(x+"="+env[x]);}getEnvStrings.strings=strings;}return getEnvStrings.strings}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i);}if(!dontAddNull)HEAP8[buffer>>0]=0;}function _environ_get(__environ,environ_buf){var bufSize=0;getEnvStrings().forEach(function(string,i){var ptr=environ_buf+bufSize;HEAPU32[__environ+i*4>>2]=ptr;writeAsciiToMemory(string,ptr);bufSize+=string.length+1;});return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(function(string){bufSize+=string.length+1;});HEAPU32[penviron_buf_size>>2]=bufSize;return 0}function _proc_exit(code){if(!keepRuntimeAlive()){if(Module["onExit"])Module["onExit"](code);ABORT=true;}quit_(code,new ExitStatus(code));}function exitJS(status,implicit){_proc_exit(status);}var _exit=exitJS;function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return e.errno}}function _fd_fdstat_get(fd,pbuf){try{var stream=SYSCALLS.getStreamFromFD(fd);var type=stream.tty?2:FS.isDir(stream.mode)?3:FS.isLink(stream.mode)?7:4;HEAP8[pbuf>>0]=type;return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return e.errno}}function doReadv(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return -1;ret+=curr;if(curr<len)break}return ret}function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);HEAP32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){try{var offset=convertI32PairToI53Checked(offset_low,offset_high);if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);tempI64=[stream.position>>>0,(tempDouble=stream.position,+Math.abs(tempDouble)>=1?tempDouble>0?(Math.min(+Math.floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[newOffset>>2]=tempI64[0],HEAP32[newOffset+4>>2]=tempI64[1];if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return e.errno}}function doWritev(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return -1;ret+=curr;}return ret}function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e instanceof FS.ErrnoError))throw e;return e.errno}}function _getTempRet0(){return getTempRet0()}function _getentropy(buffer,size){if(!_getentropy.randomDevice){_getentropy.randomDevice=getRandomDevice();}for(var i=0;i<size;i++){HEAP8[buffer+i>>0]=_getentropy.randomDevice();}return 0}function _llvm_eh_typeid_for(type){return type}function _setTempRet0(val){setTempRet0(val);}function __isLeapYear(year){return year%4===0&&(year%100!==0||year%400===0)}function __arraySum(array,index){var sum=0;for(var i=0;i<=index;sum+=array[i++]){}return sum}var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];function __addDays(date,days){var newDate=new Date(date.getTime());while(days>0){var leap=__isLeapYear(newDate.getFullYear());var currentMonth=newDate.getMonth();var daysInCurrentMonth=(leap?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR)[currentMonth];if(days>daysInCurrentMonth-newDate.getDate()){days-=daysInCurrentMonth-newDate.getDate()+1;newDate.setDate(1);if(currentMonth<11){newDate.setMonth(currentMonth+1);}else {newDate.setMonth(0);newDate.setFullYear(newDate.getFullYear()+1);}}else {newDate.setDate(newDate.getDate()+days);return newDate}}return newDate}function _strftime(s,maxsize,format,tm){var tm_zone=HEAP32[tm+40>>2];var date={tm_sec:HEAP32[tm>>2],tm_min:HEAP32[tm+4>>2],tm_hour:HEAP32[tm+8>>2],tm_mday:HEAP32[tm+12>>2],tm_mon:HEAP32[tm+16>>2],tm_year:HEAP32[tm+20>>2],tm_wday:HEAP32[tm+24>>2],tm_yday:HEAP32[tm+28>>2],tm_isdst:HEAP32[tm+32>>2],tm_gmtoff:HEAP32[tm+36>>2],tm_zone:tm_zone?UTF8ToString(tm_zone):""};var pattern=UTF8ToString(format);var EXPANSION_RULES_1={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var rule in EXPANSION_RULES_1){pattern=pattern.replace(new RegExp(rule,"g"),EXPANSION_RULES_1[rule]);}var WEEKDAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];function leadingSomething(value,digits,character){var str=typeof value=="number"?value.toString():value||"";while(str.length<digits){str=character[0]+str;}return str}function leadingNulls(value,digits){return leadingSomething(value,digits,"0")}function compareByDay(date1,date2){function sgn(value){return value<0?-1:value>0?1:0}var compare;if((compare=sgn(date1.getFullYear()-date2.getFullYear()))===0){if((compare=sgn(date1.getMonth()-date2.getMonth()))===0){compare=sgn(date1.getDate()-date2.getDate());}}return compare}function getFirstWeekStartDate(janFourth){switch(janFourth.getDay()){case 0:return new Date(janFourth.getFullYear()-1,11,29);case 1:return janFourth;case 2:return new Date(janFourth.getFullYear(),0,3);case 3:return new Date(janFourth.getFullYear(),0,2);case 4:return new Date(janFourth.getFullYear(),0,1);case 5:return new Date(janFourth.getFullYear()-1,11,31);case 6:return new Date(janFourth.getFullYear()-1,11,30)}}function getWeekBasedYear(date){var thisDate=__addDays(new Date(date.tm_year+1900,0,1),date.tm_yday);var janFourthThisYear=new Date(thisDate.getFullYear(),0,4);var janFourthNextYear=new Date(thisDate.getFullYear()+1,0,4);var firstWeekStartThisYear=getFirstWeekStartDate(janFourthThisYear);var firstWeekStartNextYear=getFirstWeekStartDate(janFourthNextYear);if(compareByDay(firstWeekStartThisYear,thisDate)<=0){if(compareByDay(firstWeekStartNextYear,thisDate)<=0){return thisDate.getFullYear()+1}else {return thisDate.getFullYear()}}else {return thisDate.getFullYear()-1}}var EXPANSION_RULES_2={"%a":function(date){return WEEKDAYS[date.tm_wday].substring(0,3)},"%A":function(date){return WEEKDAYS[date.tm_wday]},"%b":function(date){return MONTHS[date.tm_mon].substring(0,3)},"%B":function(date){return MONTHS[date.tm_mon]},"%C":function(date){var year=date.tm_year+1900;return leadingNulls(year/100|0,2)},"%d":function(date){return leadingNulls(date.tm_mday,2)},"%e":function(date){return leadingSomething(date.tm_mday,2," ")},"%g":function(date){return getWeekBasedYear(date).toString().substring(2)},"%G":function(date){return getWeekBasedYear(date)},"%H":function(date){return leadingNulls(date.tm_hour,2)},"%I":function(date){var twelveHour=date.tm_hour;if(twelveHour==0)twelveHour=12;else if(twelveHour>12)twelveHour-=12;return leadingNulls(twelveHour,2)},"%j":function(date){return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900)?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR,date.tm_mon-1),3)},"%m":function(date){return leadingNulls(date.tm_mon+1,2)},"%M":function(date){return leadingNulls(date.tm_min,2)},"%n":function(){return "\n"},"%p":function(date){if(date.tm_hour>=0&&date.tm_hour<12){return "AM"}else {return "PM"}},"%S":function(date){return leadingNulls(date.tm_sec,2)},"%t":function(){return "\t"},"%u":function(date){return date.tm_wday||7},"%U":function(date){var days=date.tm_yday+7-date.tm_wday;return leadingNulls(Math.floor(days/7),2)},"%V":function(date){var val=Math.floor((date.tm_yday+7-(date.tm_wday+6)%7)/7);if((date.tm_wday+371-date.tm_yday-2)%7<=2){val++;}if(!val){val=52;var dec31=(date.tm_wday+7-date.tm_yday-1)%7;if(dec31==4||dec31==5&&__isLeapYear(date.tm_year%400-1)){val++;}}else if(val==53){var jan1=(date.tm_wday+371-date.tm_yday)%7;if(jan1!=4&&(jan1!=3||!__isLeapYear(date.tm_year)))val=1;}return leadingNulls(val,2)},"%w":function(date){return date.tm_wday},"%W":function(date){var days=date.tm_yday+7-(date.tm_wday+6)%7;return leadingNulls(Math.floor(days/7),2)},"%y":function(date){return (date.tm_year+1900).toString().substring(2)},"%Y":function(date){return date.tm_year+1900},"%z":function(date){var off=date.tm_gmtoff;var ahead=off>=0;off=Math.abs(off)/60;off=off/60*100+off%60;return (ahead?"+":"-")+String("0000"+off).slice(-4)},"%Z":function(date){return date.tm_zone},"%%":function(){return "%"}};pattern=pattern.replace(/%%/g,"\0\0");for(var rule in EXPANSION_RULES_2){if(pattern.includes(rule)){pattern=pattern.replace(new RegExp(rule,"g"),EXPANSION_RULES_2[rule](date));}}pattern=pattern.replace(/\0\0/g,"%");var bytes=intArrayFromString(pattern,false);if(bytes.length>maxsize){return 0}writeArrayToMemory(bytes,s);return bytes.length-1}function _strftime_l(s,maxsize,format,tm){return _strftime(s,maxsize,format,tm)}function uleb128Encode(n,target){if(n<128){target.push(n);}else {target.push(n%128|128,n>>7);}}function sigToWasmTypes(sig){var typeNames={"i":"i32","j":"i64","f":"f32","d":"f64","p":"i32"};var type={parameters:[],results:sig[0]=="v"?[]:[typeNames[sig[0]]]};for(var i=1;i<sig.length;++i){type.parameters.push(typeNames[sig[i]]);}return type}function convertJsFunctionToWasm(func,sig){if(typeof WebAssembly.Function=="function"){return new WebAssembly.Function(sigToWasmTypes(sig),func)}var typeSectionBody=[1,96];var sigRet=sig.slice(0,1);var sigParam=sig.slice(1);var typeCodes={"i":127,"p":127,"j":126,"f":125,"d":124};uleb128Encode(sigParam.length,typeSectionBody);for(var i=0;i<sigParam.length;++i){typeSectionBody.push(typeCodes[sigParam[i]]);}if(sigRet=="v"){typeSectionBody.push(0);}else {typeSectionBody.push(1,typeCodes[sigRet]);}var bytes=[0,97,115,109,1,0,0,0,1];uleb128Encode(typeSectionBody.length,bytes);bytes.push.apply(bytes,typeSectionBody);bytes.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var module=new WebAssembly.Module(new Uint8Array(bytes));var instance=new WebAssembly.Instance(module,{"e":{"f":func}});var wrappedFunc=instance.exports["f"];return wrappedFunc}function updateTableMap(offset,count){if(functionsInTableMap){for(var i=offset;i<offset+count;i++){var item=getWasmTableEntry(i);if(item){functionsInTableMap.set(item,i);}}}}var functionsInTableMap=undefined;var freeTableIndexes=[];function getEmptyTableSlot(){if(freeTableIndexes.length){return freeTableIndexes.pop()}try{wasmTable.grow(1);}catch(err){if(!(err instanceof RangeError)){throw err}throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return wasmTable.length-1}function setWasmTableEntry(idx,func){wasmTable.set(idx,func);wasmTableMirror[idx]=wasmTable.get(idx);}function addFunction(func,sig){if(!functionsInTableMap){functionsInTableMap=new WeakMap;updateTableMap(0,wasmTable.length);}if(functionsInTableMap.has(func)){return functionsInTableMap.get(func)}var ret=getEmptyTableSlot();try{setWasmTableEntry(ret,func);}catch(err){if(!(err instanceof TypeError)){throw err}var wrapped=convertJsFunctionToWasm(func,sig);setWasmTableEntry(ret,wrapped);}functionsInTableMap.set(func,ret);return ret}function getCFunc(ident){var func=Module["_"+ident];return func}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len);}return ret},"array":function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i]);}else {cArgs[i]=args[i];}}}var ret=func.apply(null,cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret}function cwrap(ident,returnType,argTypes,opts){argTypes=argTypes||[];var numericArgs=argTypes.every(type=>type==="number");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){return ccall(ident,returnType,argTypes,arguments)}}var FSNode=function(parent,name,mode,rdev){if(!parent){parent=this;}this.parent=parent;this.mount=parent.mount;this.mounted=null;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.node_ops={};this.stream_ops={};this.rdev=rdev;};var readMode=292|73;var writeMode=146;Object.defineProperties(FSNode.prototype,{read:{get:function(){return (this.mode&readMode)===readMode},set:function(val){val?this.mode|=readMode:this.mode&=~readMode;}},write:{get:function(){return (this.mode&writeMode)===writeMode},set:function(val){val?this.mode|=writeMode:this.mode&=~writeMode;}},isFolder:{get:function(){return FS.isDir(this.mode)}},isDevice:{get:function(){return FS.isChrdev(this.mode)}}});FS.FSNode=FSNode;FS.staticInit();Module["FS_createPath"]=FS.createPath;Module["FS_createDataFile"]=FS.createDataFile;Module["FS_createPreloadedFile"]=FS.createPreloadedFile;Module["FS_unlink"]=FS.unlink;Module["FS_createLazyFile"]=FS.createLazyFile;Module["FS_createDevice"]=FS.createDevice;if(ENVIRONMENT_IS_NODE){requireNodeFS();NODEFS.staticInit();}ERRNO_CODES={"EPERM":63,"ENOENT":44,"ESRCH":71,"EINTR":27,"EIO":29,"ENXIO":60,"E2BIG":1,"ENOEXEC":45,"EBADF":8,"ECHILD":12,"EAGAIN":6,"EWOULDBLOCK":6,"ENOMEM":48,"EACCES":2,"EFAULT":21,"ENOTBLK":105,"EBUSY":10,"EEXIST":20,"EXDEV":75,"ENODEV":43,"ENOTDIR":54,"EISDIR":31,"EINVAL":28,"ENFILE":41,"EMFILE":33,"ENOTTY":59,"ETXTBSY":74,"EFBIG":22,"ENOSPC":51,"ESPIPE":70,"EROFS":69,"EMLINK":34,"EPIPE":64,"EDOM":18,"ERANGE":68,"ENOMSG":49,"EIDRM":24,"ECHRNG":106,"EL2NSYNC":156,"EL3HLT":107,"EL3RST":108,"ELNRNG":109,"EUNATCH":110,"ENOCSI":111,"EL2HLT":112,"EDEADLK":16,"ENOLCK":46,"EBADE":113,"EBADR":114,"EXFULL":115,"ENOANO":104,"EBADRQC":103,"EBADSLT":102,"EDEADLOCK":16,"EBFONT":101,"ENOSTR":100,"ENODATA":116,"ETIME":117,"ENOSR":118,"ENONET":119,"ENOPKG":120,"EREMOTE":121,"ENOLINK":47,"EADV":122,"ESRMNT":123,"ECOMM":124,"EPROTO":65,"EMULTIHOP":36,"EDOTDOT":125,"EBADMSG":9,"ENOTUNIQ":126,"EBADFD":127,"EREMCHG":128,"ELIBACC":129,"ELIBBAD":130,"ELIBSCN":131,"ELIBMAX":132,"ELIBEXEC":133,"ENOSYS":52,"ENOTEMPTY":55,"ENAMETOOLONG":37,"ELOOP":32,"EOPNOTSUPP":138,"EPFNOSUPPORT":139,"ECONNRESET":15,"ENOBUFS":42,"EAFNOSUPPORT":5,"EPROTOTYPE":67,"ENOTSOCK":57,"ENOPROTOOPT":50,"ESHUTDOWN":140,"ECONNREFUSED":14,"EADDRINUSE":3,"ECONNABORTED":13,"ENETUNREACH":40,"ENETDOWN":38,"ETIMEDOUT":73,"EHOSTDOWN":142,"EHOSTUNREACH":23,"EINPROGRESS":26,"EALREADY":7,"EDESTADDRREQ":17,"EMSGSIZE":35,"EPROTONOSUPPORT":66,"ESOCKTNOSUPPORT":137,"EADDRNOTAVAIL":4,"ENETRESET":39,"EISCONN":30,"ENOTCONN":53,"ETOOMANYREFS":141,"EUSERS":136,"EDQUOT":19,"ESTALE":72,"ENOTSUP":138,"ENOMEDIUM":148,"EILSEQ":25,"EOVERFLOW":61,"ECANCELED":11,"ENOTRECOVERABLE":56,"EOWNERDEAD":62,"ESTRPIPE":135};var asmLibraryArg={"t":___assert_fail,"re":___call_sighandler,"o":___cxa_allocate_exception,"u":___cxa_begin_catch,"Ne":___cxa_call_unexpected,"y":___cxa_end_catch,"b":___cxa_find_matching_catch_2,"j":___cxa_find_matching_catch_3,"C":___cxa_find_matching_catch_4,"p":___cxa_free_exception,"wb":___cxa_rethrow,"J":___cxa_throw,"uc":___cxa_uncaught_exceptions,"f":___resumeException,"dc":___syscall_chmod,"lc":___syscall_faccessat,"Fd":___syscall_fallocate,"ec":___syscall_fchmod,"cc":___syscall_fchown32,"wa":___syscall_fcntl64,"jc":___syscall_fdatasync,"ve":___syscall_fstat64,"Pd":___syscall_ftruncate64,"vc":___syscall_getcwd,"pc":___syscall_getdents64,"Ce":___syscall_ioctl,"be":___syscall_lstat64,"rc":___syscall_mkdirat,"je":___syscall_newfstatat,"Tb":___syscall_openat,"Ie":___syscall_pipe,"$b":___syscall_readlinkat,"sc":___syscall_renameat,"qc":___syscall_rmdir,"pe":___syscall_stat64,"oc":___syscall_statfs64,"tc":___syscall_unlinkat,"fc":___syscall_utimensat,"gc":__dlinit,"ic":__dlopen_js,"hc":__dlsym_js,"Sa":__emscripten_date_now,"Oe":__emscripten_throw_longjmp,"Gd":__localtime_js,"Rd":__mktime_js,"ac":__mmap_js,"bc":__munmap_js,"Zd":__tzset_js,"Z":_abort,"Ke":_emscripten_get_heap_max,"vb":_emscripten_get_now,"Pe":_emscripten_memcpy_big,"Qe":_emscripten_resize_heap,"mc":_environ_get,"nc":_environ_sizes_get,"Ba":_exit,"Ma":_fd_close,"xb":_fd_fdstat_get,"Qb":_fd_read,"Vd":_fd_seek,"jb":_fd_write,"a":_getTempRet0,"Me":_getentropy,"db":invoke_dd,"Za":invoke_ddd,"pb":invoke_ddi,"Yd":invoke_ddii,"q":invoke_di,"ha":invoke_did,"z":invoke_dii,"xa":invoke_diid,"E":invoke_diidi,"F":invoke_diii,"Cb":invoke_diiii,"Ea":invoke_diiiiii,"Vb":invoke_diiiiiiii,"Ra":invoke_fiii,"B":invoke_i,"na":invoke_id,"ne":invoke_idd,"Ia":invoke_idddddddddi,"La":invoke_iddddii,"Fe":invoke_iddddiiiiiiiiiiiiiiiifiii,"ja":invoke_iddii,"Q":invoke_idi,"$":invoke_idii,"c":invoke_ii,"D":invoke_iid,"T":invoke_iidd,"W":invoke_iiddd,"P":invoke_iidddd,"V":invoke_iiddddd,"fa":invoke_iidddddd,"ra":invoke_iiddddddd,"Ya":invoke_iidddddddd,"ye":invoke_iidddddiiiddddd,"qb":invoke_iiddddi,"Ee":invoke_iiddddiiii,"$d":invoke_iiddddiiiiiiiiiiiiiii,"Wb":invoke_iidddi,"ab":invoke_iiddi,"ob":invoke_iiddii,"Aa":invoke_iiddiii,"Bb":invoke_iiddiiiiii,"A":invoke_iidi,"fe":invoke_iidiiiiii,"we":invoke_iifiii,"d":invoke_iii,"H":invoke_iiid,"zb":invoke_iiidd,"ga":invoke_iiiddd,"Je":invoke_iiidddddd,"Ha":invoke_iiidddddddd,"Ge":invoke_iiidddddddddddi,"Ab":invoke_iiiddddddddid,"Mb":invoke_iiiddddii,"Pb":invoke_iiiddddiii,"sb":invoke_iiiddddiiii,"zc":invoke_iiiddddj,"Rb":invoke_iiiddii,"ue":invoke_iiiddiii,"ta":invoke_iiidi,"Oa":invoke_iiidii,"X":invoke_iiidiii,"bb":invoke_iiidiiiii,"Nb":invoke_iiidiiiiii,"Le":invoke_iiifii,"e":invoke_iiii,"Y":invoke_iiiid,"he":invoke_iiiidd,"ge":invoke_iiiidddd,"Sb":invoke_iiiidddddddd,"_a":invoke_iiiidddddddddddi,"Ja":invoke_iiiiddddddddid,"Fb":invoke_iiiiddddi,"Kb":invoke_iiiiddddiiiiiii,"Lb":invoke_iiiiddi,"_d":invoke_iiiiddiiiiii,"Da":invoke_iiiidi,"nb":invoke_iiiidii,"l":invoke_iiiii,"ya":invoke_iiiiid,"Xd":invoke_iiiiiddd,"Gb":invoke_iiiiidddddi,"de":invoke_iiiiidddiddd,"Jb":invoke_iiiiidddiiii,"aa":invoke_iiiiiddidid,"Ub":invoke_iiiiidi,"m":invoke_iiiiii,"Na":invoke_iiiiiidddd,"te":invoke_iiiiiiddddii,"oe":invoke_iiiiiiddddiiiidddd,"qe":invoke_iiiiiiddddiiiiii,"He":invoke_iiiiiiddi,"Ka":invoke_iiiiiidiii,"x":invoke_iiiiiii,"ie":invoke_iiiiiiid,"xe":invoke_iiiiiiidddd,"Be":invoke_iiiiiiidddddd,"ke":invoke_iiiiiiiddiii,"le":invoke_iiiiiiiffiii,"I":invoke_iiiiiiii,"ce":invoke_iiiiiiiiddd,"mb":invoke_iiiiiiiidddii,"me":invoke_iiiiiiiidf,"O":invoke_iiiiiiiii,"De":invoke_iiiiiiiiiddi,"yb":invoke_iiiiiiiiiddiiiiiid,"Ib":invoke_iiiiiiiiidiii,"U":invoke_iiiiiiiiii,"da":invoke_iiiiiiiiiii,"Ca":invoke_iiiiiiiiiiiddd,"ia":invoke_iiiiiiiiiiii,"ua":invoke_iiiiiiiiiiiid,"pa":invoke_iiiiiiiiiiiii,"Wd":invoke_iiiiiiiiiiiiid,"Fa":invoke_iiiiiiiiiiiiii,"fb":invoke_iiiiiiiiiiiiiii,"Xa":invoke_iiiiiiiiiiiiiiii,"ee":invoke_iiiiiiiiiiiiiiiiiiii,"xc":invoke_iiiiiiiiiiiiiijj,"hd":invoke_iiiiiiiiiiiiijjii,"nd":invoke_iiiiiiiiiiiiijjji,"ud":invoke_iiiiiiiiiiijji,"Ec":invoke_iiiiiiiiiijiiiii,"Nc":invoke_iiiiiiiijii,"Uc":invoke_iiiiiiiijiii,"Vc":invoke_iiiiiiiijjji,"rd":invoke_iiiiiiijiii,"Rc":invoke_iiiiiiijji,"pd":invoke_iiiiiij,"sd":invoke_iiiiiijii,"Fc":invoke_iiiiiijj,"Jd":invoke_iiiiiijjii,"Hd":invoke_iiiiij,"Bd":invoke_iiiiiji,"Mc":invoke_iiiiijiiii,"gd":invoke_iiiiijiiiii,"Sc":invoke_iiiiijjii,"cd":invoke_iiiij,"md":invoke_iiiiji,"yc":invoke_iiiijiiiii,"qd":invoke_iiiijji,"Md":invoke_iiiijjjii,"Ld":invoke_iiij,"ld":invoke_iiiji,"kd":invoke_iiijiii,"Zc":invoke_iiijiiii,"yd":invoke_iiijiiiii,"Ad":invoke_iiijiiiiii,"od":invoke_iiijiiiiiii,"Xc":invoke_iiijiiiji,"$c":invoke_iiijj,"Tc":invoke_iiijjii,"id":invoke_iiijjiji,"Nd":invoke_iij,"Od":invoke_iiji,"Oc":invoke_iijii,"Hc":invoke_iijjjddi,"vd":invoke_ij,"fd":invoke_iji,"Kd":invoke_j,"Sd":invoke_ji,"Qd":invoke_jii,"Dd":invoke_jiii,"Ic":invoke_jiiid,"Ud":invoke_jiiii,"jd":invoke_jiiiiiiiiiiiiiiiiiiiiiiiii,"_c":invoke_jiiji,"Yc":invoke_jiijji,"Gc":invoke_jij,"Lc":invoke_jijj,"Cc":invoke_jji,"n":invoke_v,"la":invoke_vd,"ae":invoke_vddddii,"Db":invoke_vdddi,"h":invoke_vi,"_":invoke_vid,"M":invoke_vidd,"ca":invoke_viddd,"ma":invoke_vidddd,"ib":invoke_viddddi,"se":invoke_viddddii,"rb":invoke_viddddiii,"kb":invoke_vidddi,"va":invoke_viddi,"R":invoke_vidi,"lb":invoke_vidii,"ba":invoke_vidiii,"Eb":invoke_vidiiii,"i":invoke_vii,"G":invoke_viid,"K":invoke_viidd,"ka":invoke_viiddd,"Va":invoke_viidddd,"Wa":invoke_viidddddd,"eb":invoke_viidi,"L":invoke_viidii,"Qa":invoke_viidiii,"g":invoke_viii,"sa":invoke_viiid,"cb":invoke_viiiddd,"wc":invoke_viiidi,"k":invoke_viiii,"Pa":invoke_viiiid,"Ua":invoke_viiiiddd,"$a":invoke_viiiidddddddd,"Zb":invoke_viiiidddddddi,"hb":invoke_viiiidddi,"Yb":invoke_viiiiddidid,"Ta":invoke_viiiidi,"Ob":invoke_viiiidiiii,"s":invoke_viiiii,"_b":invoke_viiiiidddddddddddddddi,"ub":invoke_viiiiidddddddi,"tb":invoke_viiiiidddddi,"Hb":invoke_viiiiiddiiiiiii,"v":invoke_viiiiii,"N":invoke_viiiiiii,"ea":invoke_viiiiiiii,"ze":invoke_viiiiiiiid,"S":invoke_viiiiiiiii,"za":invoke_viiiiiiiiidididid,"oa":invoke_viiiiiiiiii,"Ae":invoke_viiiiiiiiiii,"Xb":invoke_viiiiiiiiiiii,"gb":invoke_viiiiiiiiiiiiii,"Ga":invoke_viiiiiiiiiiiiiii,"td":invoke_viiiiiji,"Cd":invoke_viiiij,"Ac":invoke_viiij,"zd":invoke_viiiji,"ad":invoke_viiijj,"wd":invoke_viij,"Dc":invoke_viiji,"Id":invoke_viijii,"Td":invoke_viijj,"Kc":invoke_viijji,"Wc":invoke_viijjji,"Ed":invoke_vij,"Bc":invoke_viji,"Pc":invoke_vijid,"ed":invoke_vijii,"Jc":invoke_vijiidddi,"Qc":invoke_vijiii,"bd":invoke_vijj,"dd":invoke_vijjj,"xd":invoke_vj,"w":_llvm_eh_typeid_for,"r":_setTempRet0,"qa":_strftime,"kc":_strftime_l};createWasm();Module["___wasm_call_ctors"]=function(){return (Module["___wasm_call_ctors"]=Module["asm"]["Se"]).apply(null,arguments)};Module["_CPLSetConfigOption"]=function(){return (Module["_CPLSetConfigOption"]=Module["asm"]["Te"]).apply(null,arguments)};Module["_CPLSetThreadLocalConfigOption"]=function(){return (Module["_CPLSetThreadLocalConfigOption"]=Module["asm"]["Ue"]).apply(null,arguments)};Module["_CPLError"]=function(){return (Module["_CPLError"]=Module["asm"]["Ve"]).apply(null,arguments)};Module["_CPLErrorReset"]=function(){return (Module["_CPLErrorReset"]=Module["asm"]["We"]).apply(null,arguments)};Module["_CPLGetLastErrorNo"]=function(){return (Module["_CPLGetLastErrorNo"]=Module["asm"]["Xe"]).apply(null,arguments)};Module["_CPLGetLastErrorType"]=function(){return (Module["_CPLGetLastErrorType"]=Module["asm"]["Ye"]).apply(null,arguments)};Module["_CPLGetLastErrorMsg"]=function(){return (Module["_CPLGetLastErrorMsg"]=Module["asm"]["Ze"]).apply(null,arguments)};Module["_CPLQuietErrorHandler"]=function(){return (Module["_CPLQuietErrorHandler"]=Module["asm"]["_e"]).apply(null,arguments)};Module["_CPLSetErrorHandler"]=function(){return (Module["_CPLSetErrorHandler"]=Module["asm"]["$e"]).apply(null,arguments)};Module["_CSLCount"]=function(){return (Module["_CSLCount"]=Module["asm"]["af"]).apply(null,arguments)};Module["_GDALSuggestedWarpOutput"]=function(){return (Module["_GDALSuggestedWarpOutput"]=Module["asm"]["bf"]).apply(null,arguments)};Module["_GDALGenImgProjTransform"]=function(){return (Module["_GDALGenImgProjTransform"]=Module["asm"]["cf"]).apply(null,arguments)};Module["_GDALCreateGenImgProjTransformer"]=function(){return (Module["_GDALCreateGenImgProjTransformer"]=Module["asm"]["df"]).apply(null,arguments)};Module["_GDALCreateGenImgProjTransformer2"]=function(){return (Module["_GDALCreateGenImgProjTransformer2"]=Module["asm"]["ef"]).apply(null,arguments)};Module["_GDALDestroyGenImgProjTransformer"]=function(){return (Module["_GDALDestroyGenImgProjTransformer"]=Module["asm"]["ff"]).apply(null,arguments)};Module["_GDALReprojectImage"]=function(){return (Module["_GDALReprojectImage"]=Module["asm"]["gf"]).apply(null,arguments)};Module["_OSRNewSpatialReference"]=function(){return (Module["_OSRNewSpatialReference"]=Module["asm"]["hf"]).apply(null,arguments)};Module["_OSRDestroySpatialReference"]=function(){return (Module["_OSRDestroySpatialReference"]=Module["asm"]["jf"]).apply(null,arguments)};Module["_OSRSetFromUserInput"]=function(){return (Module["_OSRSetFromUserInput"]=Module["asm"]["kf"]).apply(null,arguments)};Module["_OSRImportFromEPSG"]=function(){return (Module["_OSRImportFromEPSG"]=Module["asm"]["lf"]).apply(null,arguments)};Module["_OCTDestroyCoordinateTransformation"]=function(){return (Module["_OCTDestroyCoordinateTransformation"]=Module["asm"]["mf"]).apply(null,arguments)};Module["_OCTNewCoordinateTransformation"]=function(){return (Module["_OCTNewCoordinateTransformation"]=Module["asm"]["nf"]).apply(null,arguments)};Module["_OCTTransform"]=function(){return (Module["_OCTTransform"]=Module["asm"]["of"]).apply(null,arguments)};Module["_GDALAllRegister"]=function(){return (Module["_GDALAllRegister"]=Module["asm"]["pf"]).apply(null,arguments)};Module["_OGRGetDriverCount"]=function(){return (Module["_OGRGetDriverCount"]=Module["asm"]["qf"]).apply(null,arguments)};Module["_OGRGetDriver"]=function(){return (Module["_OGRGetDriver"]=Module["asm"]["rf"]).apply(null,arguments)};Module["_OGR_L_GetFeatureCount"]=function(){return (Module["_OGR_L_GetFeatureCount"]=Module["asm"]["sf"]).apply(null,arguments)};Module["_OGR_L_GetName"]=function(){return (Module["_OGR_L_GetName"]=Module["asm"]["tf"]).apply(null,arguments)};Module["_OGR_DS_GetLayerCount"]=function(){return (Module["_OGR_DS_GetLayerCount"]=Module["asm"]["uf"]).apply(null,arguments)};Module["_OGR_DS_GetLayer"]=function(){return (Module["_OGR_DS_GetLayer"]=Module["asm"]["vf"]).apply(null,arguments)};Module["_OGR_DS_GetName"]=function(){return (Module["_OGR_DS_GetName"]=Module["asm"]["wf"]).apply(null,arguments)};Module["_OGR_DS_GetDriver"]=function(){return (Module["_OGR_DS_GetDriver"]=Module["asm"]["xf"]).apply(null,arguments)};Module["_OGR_Dr_GetName"]=function(){return (Module["_OGR_Dr_GetName"]=Module["asm"]["yf"]).apply(null,arguments)};Module["_GDALCreate"]=function(){return (Module["_GDALCreate"]=Module["asm"]["zf"]).apply(null,arguments)};Module["_GDALCreateCopy"]=function(){return (Module["_GDALCreateCopy"]=Module["asm"]["Af"]).apply(null,arguments)};Module["_GDALGetDriverShortName"]=function(){return (Module["_GDALGetDriverShortName"]=Module["asm"]["Bf"]).apply(null,arguments)};Module["_GDALGetDriverLongName"]=function(){return (Module["_GDALGetDriverLongName"]=Module["asm"]["Cf"]).apply(null,arguments)};Module["_GDALGetDriverCount"]=function(){return (Module["_GDALGetDriverCount"]=Module["asm"]["Df"]).apply(null,arguments)};Module["_GDALGetDriver"]=function(){return (Module["_GDALGetDriver"]=Module["asm"]["Ef"]).apply(null,arguments)};Module["_GDALGetDriverByName"]=function(){return (Module["_GDALGetDriverByName"]=Module["asm"]["Ff"]).apply(null,arguments)};Module["_GDALGetRasterXSize"]=function(){return (Module["_GDALGetRasterXSize"]=Module["asm"]["Gf"]).apply(null,arguments)};Module["_GDALGetRasterYSize"]=function(){return (Module["_GDALGetRasterYSize"]=Module["asm"]["Hf"]).apply(null,arguments)};Module["_GDALGetRasterBand"]=function(){return (Module["_GDALGetRasterBand"]=Module["asm"]["If"]).apply(null,arguments)};Module["_GDALGetRasterCount"]=function(){return (Module["_GDALGetRasterCount"]=Module["asm"]["Jf"]).apply(null,arguments)};Module["_GDALGetProjectionRef"]=function(){return (Module["_GDALGetProjectionRef"]=Module["asm"]["Kf"]).apply(null,arguments)};Module["_GDALSetProjection"]=function(){return (Module["_GDALSetProjection"]=Module["asm"]["Lf"]).apply(null,arguments)};Module["_GDALGetGeoTransform"]=function(){return (Module["_GDALGetGeoTransform"]=Module["asm"]["Mf"]).apply(null,arguments)};Module["_GDALSetGeoTransform"]=function(){return (Module["_GDALSetGeoTransform"]=Module["asm"]["Nf"]).apply(null,arguments)};Module["_GDALGetDatasetDriver"]=function(){return (Module["_GDALGetDatasetDriver"]=Module["asm"]["Of"]).apply(null,arguments)};Module["_GDALGetFileList"]=function(){return (Module["_GDALGetFileList"]=Module["asm"]["Pf"]).apply(null,arguments)};Module["_GDALOpen"]=function(){return (Module["_GDALOpen"]=Module["asm"]["Qf"]).apply(null,arguments)};Module["_GDALOpenEx"]=function(){return (Module["_GDALOpenEx"]=Module["asm"]["Rf"]).apply(null,arguments)};Module["_GDALClose"]=function(){return (Module["_GDALClose"]=Module["asm"]["Sf"]).apply(null,arguments)};Module["_GDALDatasetGetLayerCount"]=function(){return (Module["_GDALDatasetGetLayerCount"]=Module["asm"]["Tf"]).apply(null,arguments)};Module["_GDALDatasetGetLayer"]=function(){return (Module["_GDALDatasetGetLayer"]=Module["asm"]["Uf"]).apply(null,arguments)};Module["_GDALGetRasterDataType"]=function(){return (Module["_GDALGetRasterDataType"]=Module["asm"]["Vf"]).apply(null,arguments)};Module["_GDALGetRasterNoDataValue"]=function(){return (Module["_GDALGetRasterNoDataValue"]=Module["asm"]["Wf"]).apply(null,arguments)};Module["_GDALGetRasterMaximum"]=function(){return (Module["_GDALGetRasterMaximum"]=Module["asm"]["Xf"]).apply(null,arguments)};Module["_GDALGetRasterMinimum"]=function(){return (Module["_GDALGetRasterMinimum"]=Module["asm"]["Yf"]).apply(null,arguments)};Module["_GDALGetRasterStatistics"]=function(){return (Module["_GDALGetRasterStatistics"]=Module["asm"]["Zf"]).apply(null,arguments)};Module["_GDALSetCacheMax"]=function(){return (Module["_GDALSetCacheMax"]=Module["asm"]["_f"]).apply(null,arguments)};Module["_GDALGetDescription"]=function(){return (Module["_GDALGetDescription"]=Module["asm"]["$f"]).apply(null,arguments)};Module["_GDALGetMetadataItem"]=function(){return (Module["_GDALGetMetadataItem"]=Module["asm"]["ag"]).apply(null,arguments)};Module["_GDALBuildVRT"]=function(){return (Module["_GDALBuildVRT"]=Module["asm"]["bg"]).apply(null,arguments)};Module["_GDALBuildVRTOptionsFree"]=function(){return (Module["_GDALBuildVRTOptionsFree"]=Module["asm"]["cg"]).apply(null,arguments)};Module["_GDALBuildVRTOptionsNew"]=function(){return (Module["_GDALBuildVRTOptionsNew"]=Module["asm"]["dg"]).apply(null,arguments)};Module["_GDALTranslate"]=function(){return (Module["_GDALTranslate"]=Module["asm"]["eg"]).apply(null,arguments)};Module["_GDALTranslateOptionsNew"]=function(){return (Module["_GDALTranslateOptionsNew"]=Module["asm"]["fg"]).apply(null,arguments)};Module["_GDALTranslateOptionsFree"]=function(){return (Module["_GDALTranslateOptionsFree"]=Module["asm"]["gg"]).apply(null,arguments)};Module["_GDALRasterize"]=function(){return (Module["_GDALRasterize"]=Module["asm"]["hg"]).apply(null,arguments)};Module["_GDALRasterizeOptionsNew"]=function(){return (Module["_GDALRasterizeOptionsNew"]=Module["asm"]["ig"]).apply(null,arguments)};Module["_GDALRasterizeOptionsFree"]=function(){return (Module["_GDALRasterizeOptionsFree"]=Module["asm"]["jg"]).apply(null,arguments)};Module["_GDALWarp"]=function(){return (Module["_GDALWarp"]=Module["asm"]["kg"]).apply(null,arguments)};Module["_GDALWarpAppOptionsNew"]=function(){return (Module["_GDALWarpAppOptionsNew"]=Module["asm"]["lg"]).apply(null,arguments)};Module["_GDALWarpAppOptionsFree"]=function(){return (Module["_GDALWarpAppOptionsFree"]=Module["asm"]["mg"]).apply(null,arguments)};Module["_GDALWarpAppOptionsSetProgress"]=function(){return (Module["_GDALWarpAppOptionsSetProgress"]=Module["asm"]["ng"]).apply(null,arguments)};Module["_GDALVectorTranslate"]=function(){return (Module["_GDALVectorTranslate"]=Module["asm"]["og"]).apply(null,arguments)};Module["_GDALVectorTranslateOptionsFree"]=function(){return (Module["_GDALVectorTranslateOptionsFree"]=Module["asm"]["pg"]).apply(null,arguments)};Module["_GDALVectorTranslateOptionsNew"]=function(){return (Module["_GDALVectorTranslateOptionsNew"]=Module["asm"]["qg"]).apply(null,arguments)};Module["_GDALDEMProcessing"]=function(){return (Module["_GDALDEMProcessing"]=Module["asm"]["rg"]).apply(null,arguments)};Module["_GDALDEMProcessingOptionsNew"]=function(){return (Module["_GDALDEMProcessingOptionsNew"]=Module["asm"]["sg"]).apply(null,arguments)};Module["_GDALDEMProcessingOptionsFree"]=function(){return (Module["_GDALDEMProcessingOptionsFree"]=Module["asm"]["tg"]).apply(null,arguments)};var ___errno_location=Module["___errno_location"]=function(){return (___errno_location=Module["___errno_location"]=Module["asm"]["ug"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return (_malloc=Module["_malloc"]=Module["asm"]["vg"]).apply(null,arguments)};var _free=Module["_free"]=function(){return (_free=Module["_free"]=Module["asm"]["wg"]).apply(null,arguments)};var _emscripten_builtin_memalign=Module["_emscripten_builtin_memalign"]=function(){return (_emscripten_builtin_memalign=Module["_emscripten_builtin_memalign"]=Module["asm"]["xg"]).apply(null,arguments)};var _setThrew=Module["_setThrew"]=function(){return (_setThrew=Module["_setThrew"]=Module["asm"]["yg"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return (stackSave=Module["stackSave"]=Module["asm"]["zg"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return (stackRestore=Module["stackRestore"]=Module["asm"]["Ag"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return (stackAlloc=Module["stackAlloc"]=Module["asm"]["Bg"]).apply(null,arguments)};var ___cxa_can_catch=Module["___cxa_can_catch"]=function(){return (___cxa_can_catch=Module["___cxa_can_catch"]=Module["asm"]["Cg"]).apply(null,arguments)};var ___cxa_is_pointer_type=Module["___cxa_is_pointer_type"]=function(){return (___cxa_is_pointer_type=Module["___cxa_is_pointer_type"]=Module["asm"]["Dg"]).apply(null,arguments)};var dynCall_jiiii=Module["dynCall_jiiii"]=function(){return (dynCall_jiiii=Module["dynCall_jiiii"]=Module["asm"]["Fg"]).apply(null,arguments)};var dynCall_jii=Module["dynCall_jii"]=function(){return (dynCall_jii=Module["dynCall_jii"]=Module["asm"]["Gg"]).apply(null,arguments)};var dynCall_iiji=Module["dynCall_iiji"]=function(){return (dynCall_iiji=Module["dynCall_iiji"]=Module["asm"]["Hg"]).apply(null,arguments)};var dynCall_ji=Module["dynCall_ji"]=function(){return (dynCall_ji=Module["dynCall_ji"]=Module["asm"]["Ig"]).apply(null,arguments)};var dynCall_iij=Module["dynCall_iij"]=function(){return (dynCall_iij=Module["dynCall_iij"]=Module["asm"]["Jg"]).apply(null,arguments)};var dynCall_iiiji=Module["dynCall_iiiji"]=function(){return (dynCall_iiiji=Module["dynCall_iiiji"]=Module["asm"]["Kg"]).apply(null,arguments)};var dynCall_iiiijjjii=Module["dynCall_iiiijjjii"]=function(){return (dynCall_iiiijjjii=Module["dynCall_iiiijjjii"]=Module["asm"]["Lg"]).apply(null,arguments)};var dynCall_iiij=Module["dynCall_iiij"]=function(){return (dynCall_iiij=Module["dynCall_iiij"]=Module["asm"]["Mg"]).apply(null,arguments)};var dynCall_j=Module["dynCall_j"]=function(){return (dynCall_j=Module["dynCall_j"]=Module["asm"]["Ng"]).apply(null,arguments)};var dynCall_iiiiij=Module["dynCall_iiiiij"]=function(){return (dynCall_iiiiij=Module["dynCall_iiiiij"]=Module["asm"]["Og"]).apply(null,arguments)};var dynCall_iiiiiijj=Module["dynCall_iiiiiijj"]=function(){return (dynCall_iiiiiijj=Module["dynCall_iiiiiijj"]=Module["asm"]["Pg"]).apply(null,arguments)};var dynCall_viijii=Module["dynCall_viijii"]=function(){return (dynCall_viijii=Module["dynCall_viijii"]=Module["asm"]["Qg"]).apply(null,arguments)};var dynCall_iiiij=Module["dynCall_iiiij"]=function(){return (dynCall_iiiij=Module["dynCall_iiiij"]=Module["asm"]["Rg"]).apply(null,arguments)};var dynCall_vijii=Module["dynCall_vijii"]=function(){return (dynCall_vijii=Module["dynCall_vijii"]=Module["asm"]["Sg"]).apply(null,arguments)};var dynCall_iijii=Module["dynCall_iijii"]=function(){return (dynCall_iijii=Module["dynCall_iijii"]=Module["asm"]["Tg"]).apply(null,arguments)};var dynCall_iiiiiij=Module["dynCall_iiiiiij"]=function(){return (dynCall_iiiiiij=Module["dynCall_iiiiiij"]=Module["asm"]["Ug"]).apply(null,arguments)};var dynCall_vij=Module["dynCall_vij"]=function(){return (dynCall_vij=Module["dynCall_vij"]=Module["asm"]["Vg"]).apply(null,arguments)};var dynCall_iiiiji=Module["dynCall_iiiiji"]=function(){return (dynCall_iiiiji=Module["dynCall_iiiiji"]=Module["asm"]["Wg"]).apply(null,arguments)};var dynCall_ij=Module["dynCall_ij"]=function(){return (dynCall_ij=Module["dynCall_ij"]=Module["asm"]["Xg"]).apply(null,arguments)};var dynCall_viiji=Module["dynCall_viiji"]=function(){return (dynCall_viiji=Module["dynCall_viiji"]=Module["asm"]["Yg"]).apply(null,arguments)};var dynCall_viij=Module["dynCall_viij"]=function(){return (dynCall_viij=Module["dynCall_viij"]=Module["asm"]["Zg"]).apply(null,arguments)};var dynCall_jiii=Module["dynCall_jiii"]=function(){return (dynCall_jiii=Module["dynCall_jiii"]=Module["asm"]["_g"]).apply(null,arguments)};var dynCall_viiiij=Module["dynCall_viiiij"]=function(){return (dynCall_viiiij=Module["dynCall_viiiij"]=Module["asm"]["$g"]).apply(null,arguments)};var dynCall_iiiiiji=Module["dynCall_iiiiiji"]=function(){return (dynCall_iiiiiji=Module["dynCall_iiiiiji"]=Module["asm"]["ah"]).apply(null,arguments)};var dynCall_viiiji=Module["dynCall_viiiji"]=function(){return (dynCall_viiiji=Module["dynCall_viiiji"]=Module["asm"]["bh"]).apply(null,arguments)};var dynCall_iiijiiiiii=Module["dynCall_iiijiiiiii"]=function(){return (dynCall_iiijiiiiii=Module["dynCall_iiijiiiiii"]=Module["asm"]["ch"]).apply(null,arguments)};var dynCall_jij=Module["dynCall_jij"]=function(){return (dynCall_jij=Module["dynCall_jij"]=Module["asm"]["dh"]).apply(null,arguments)};var dynCall_vj=Module["dynCall_vj"]=function(){return (dynCall_vj=Module["dynCall_vj"]=Module["asm"]["eh"]).apply(null,arguments)};var dynCall_iiiiiiiiiiiiijjji=Module["dynCall_iiiiiiiiiiiiijjji"]=function(){return (dynCall_iiiiiiiiiiiiijjji=Module["dynCall_iiiiiiiiiiiiijjji"]=Module["asm"]["fh"]).apply(null,arguments)};var dynCall_iiiiiiiiiiijji=Module["dynCall_iiiiiiiiiiijji"]=function(){return (dynCall_iiiiiiiiiiijji=Module["dynCall_iiiiiiiiiiijji"]=Module["asm"]["gh"]).apply(null,arguments)};var dynCall_iiijiiiiiii=Module["dynCall_iiijiiiiiii"]=function(){return (dynCall_iiijiiiiiii=Module["dynCall_iiijiiiiiii"]=Module["asm"]["hh"]).apply(null,arguments)};var dynCall_viiiiiji=Module["dynCall_viiiiiji"]=function(){return (dynCall_viiiiiji=Module["dynCall_viiiiiji"]=Module["asm"]["ih"]).apply(null,arguments)};var dynCall_iiiiiiijiii=Module["dynCall_iiiiiiijiii"]=function(){return (dynCall_iiiiiiijiii=Module["dynCall_iiiiiiijiii"]=Module["asm"]["jh"]).apply(null,arguments)};var dynCall_iiiddddj=Module["dynCall_iiiddddj"]=function(){return (dynCall_iiiddddj=Module["dynCall_iiiddddj"]=Module["asm"]["kh"]).apply(null,arguments)};var dynCall_iiiiiijii=Module["dynCall_iiiiiijii"]=function(){return (dynCall_iiiiiijii=Module["dynCall_iiiiiijii"]=Module["asm"]["lh"]).apply(null,arguments)};var dynCall_jiiiiiiiiiiiiiiiiiiiiiiiii=Module["dynCall_jiiiiiiiiiiiiiiiiiiiiiiiii"]=function(){return (dynCall_jiiiiiiiiiiiiiiiiiiiiiiiii=Module["dynCall_jiiiiiiiiiiiiiiiiiiiiiiiii"]=Module["asm"]["mh"]).apply(null,arguments)};var dynCall_iiijiii=Module["dynCall_iiijiii"]=function(){return (dynCall_iiijiii=Module["dynCall_iiijiii"]=Module["asm"]["nh"]).apply(null,arguments)};var dynCall_iiijjiji=Module["dynCall_iiijjiji"]=function(){return (dynCall_iiijjiji=Module["dynCall_iiijjiji"]=Module["asm"]["oh"]).apply(null,arguments)};var dynCall_iiiiiiiiiiiiijjii=Module["dynCall_iiiiiiiiiiiiijjii"]=function(){return (dynCall_iiiiiiiiiiiiijjii=Module["dynCall_iiiiiiiiiiiiijjii"]=Module["asm"]["ph"]).apply(null,arguments)};var dynCall_iiiiijiiiii=Module["dynCall_iiiiijiiiii"]=function(){return (dynCall_iiiiijiiiii=Module["dynCall_iiiiijiiiii"]=Module["asm"]["qh"]).apply(null,arguments)};var dynCall_iji=Module["dynCall_iji"]=function(){return (dynCall_iji=Module["dynCall_iji"]=Module["asm"]["rh"]).apply(null,arguments)};var dynCall_iiiiiijjii=Module["dynCall_iiiiiijjii"]=function(){return (dynCall_iiiiiijjii=Module["dynCall_iiiiiijjii"]=Module["asm"]["sh"]).apply(null,arguments)};var dynCall_jiiji=Module["dynCall_jiiji"]=function(){return (dynCall_jiiji=Module["dynCall_jiiji"]=Module["asm"]["th"]).apply(null,arguments)};var dynCall_jiijji=Module["dynCall_jiijji"]=function(){return (dynCall_jiijji=Module["dynCall_jiijji"]=Module["asm"]["uh"]).apply(null,arguments)};var dynCall_viijj=Module["dynCall_viijj"]=function(){return (dynCall_viijj=Module["dynCall_viijj"]=Module["asm"]["vh"]).apply(null,arguments)};var dynCall_vijjj=Module["dynCall_vijjj"]=function(){return (dynCall_vijjj=Module["dynCall_vijjj"]=Module["asm"]["wh"]).apply(null,arguments)};var dynCall_viijjji=Module["dynCall_viijjji"]=function(){return (dynCall_viijjji=Module["dynCall_viijjji"]=Module["asm"]["xh"]).apply(null,arguments)};var dynCall_vijj=Module["dynCall_vijj"]=function(){return (dynCall_vijj=Module["dynCall_vijj"]=Module["asm"]["yh"]).apply(null,arguments)};var dynCall_iiijj=Module["dynCall_iiijj"]=function(){return (dynCall_iiijj=Module["dynCall_iiijj"]=Module["asm"]["zh"]).apply(null,arguments)};var dynCall_viiijj=Module["dynCall_viiijj"]=function(){return (dynCall_viiijj=Module["dynCall_viiijj"]=Module["asm"]["Ah"]).apply(null,arguments)};var dynCall_iiijiiii=Module["dynCall_iiijiiii"]=function(){return (dynCall_iiijiiii=Module["dynCall_iiijiiii"]=Module["asm"]["Bh"]).apply(null,arguments)};var dynCall_iiijiiiji=Module["dynCall_iiijiiiji"]=function(){return (dynCall_iiijiiiji=Module["dynCall_iiijiiiji"]=Module["asm"]["Ch"]).apply(null,arguments)};var dynCall_iiijiiiii=Module["dynCall_iiijiiiii"]=function(){return (dynCall_iiijiiiii=Module["dynCall_iiijiiiii"]=Module["asm"]["Dh"]).apply(null,arguments)};var dynCall_iiiiiiiijjji=Module["dynCall_iiiiiiiijjji"]=function(){return (dynCall_iiiiiiiijjji=Module["dynCall_iiiiiiiijjji"]=Module["asm"]["Eh"]).apply(null,arguments)};var dynCall_iiiiiiiijiii=Module["dynCall_iiiiiiiijiii"]=function(){return (dynCall_iiiiiiiijiii=Module["dynCall_iiiiiiiijiii"]=Module["asm"]["Fh"]).apply(null,arguments)};var dynCall_iiijjii=Module["dynCall_iiijjii"]=function(){return (dynCall_iiijjii=Module["dynCall_iiijjii"]=Module["asm"]["Gh"]).apply(null,arguments)};var dynCall_iiiiijjii=Module["dynCall_iiiiijjii"]=function(){return (dynCall_iiiiijjii=Module["dynCall_iiiiijjii"]=Module["asm"]["Hh"]).apply(null,arguments)};var dynCall_iiiiiiijji=Module["dynCall_iiiiiiijji"]=function(){return (dynCall_iiiiiiijji=Module["dynCall_iiiiiiijji"]=Module["asm"]["Ih"]).apply(null,arguments)};var dynCall_vijiii=Module["dynCall_vijiii"]=function(){return (dynCall_vijiii=Module["dynCall_vijiii"]=Module["asm"]["Jh"]).apply(null,arguments)};var dynCall_vijid=Module["dynCall_vijid"]=function(){return (dynCall_vijid=Module["dynCall_vijid"]=Module["asm"]["Kh"]).apply(null,arguments)};var dynCall_iiiiiiiijii=Module["dynCall_iiiiiiiijii"]=function(){return (dynCall_iiiiiiiijii=Module["dynCall_iiiiiiiijii"]=Module["asm"]["Lh"]).apply(null,arguments)};var dynCall_iiiiijiiii=Module["dynCall_iiiiijiiii"]=function(){return (dynCall_iiiiijiiii=Module["dynCall_iiiiijiiii"]=Module["asm"]["Mh"]).apply(null,arguments)};var dynCall_viji=Module["dynCall_viji"]=function(){return (dynCall_viji=Module["dynCall_viji"]=Module["asm"]["Nh"]).apply(null,arguments)};var dynCall_viijji=Module["dynCall_viijji"]=function(){return (dynCall_viijji=Module["dynCall_viijji"]=Module["asm"]["Oh"]).apply(null,arguments)};var dynCall_jijj=Module["dynCall_jijj"]=function(){return (dynCall_jijj=Module["dynCall_jijj"]=Module["asm"]["Ph"]).apply(null,arguments)};var dynCall_iijjjddi=Module["dynCall_iijjjddi"]=function(){return (dynCall_iijjjddi=Module["dynCall_iijjjddi"]=Module["asm"]["Qh"]).apply(null,arguments)};var dynCall_vijiidddi=Module["dynCall_vijiidddi"]=function(){return (dynCall_vijiidddi=Module["dynCall_vijiidddi"]=Module["asm"]["Rh"]).apply(null,arguments)};var dynCall_jiiid=Module["dynCall_jiiid"]=function(){return (dynCall_jiiid=Module["dynCall_jiiid"]=Module["asm"]["Sh"]).apply(null,arguments)};var dynCall_iiiiiiiiiijiiiii=Module["dynCall_iiiiiiiiiijiiiii"]=function(){return (dynCall_iiiiiiiiiijiiiii=Module["dynCall_iiiiiiiiiijiiiii"]=Module["asm"]["Th"]).apply(null,arguments)};var dynCall_jji=Module["dynCall_jji"]=function(){return (dynCall_jji=Module["dynCall_jji"]=Module["asm"]["Uh"]).apply(null,arguments)};var dynCall_viiij=Module["dynCall_viiij"]=function(){return (dynCall_viiij=Module["dynCall_viiij"]=Module["asm"]["Vh"]).apply(null,arguments)};var dynCall_iiiijji=Module["dynCall_iiiijji"]=function(){return (dynCall_iiiijji=Module["dynCall_iiiijji"]=Module["asm"]["Wh"]).apply(null,arguments)};var dynCall_iiiijiiiii=Module["dynCall_iiiijiiiii"]=function(){return (dynCall_iiiijiiiii=Module["dynCall_iiiijiiiii"]=Module["asm"]["Xh"]).apply(null,arguments)};var dynCall_iiiiiiiiiiiiiijj=Module["dynCall_iiiiiiiiiiiiiijj"]=function(){return (dynCall_iiiiiiiiiiiiiijj=Module["dynCall_iiiiiiiiiiiiiijj"]=Module["asm"]["Yh"]).apply(null,arguments)};function invoke_ii(index,a1){var sp=stackSave();try{return getWasmTableEntry(index)(a1)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_v(index){var sp=stackSave();try{getWasmTableEntry(index)();}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vii(index,a1,a2){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vi(index,a1){var sp=stackSave();try{getWasmTableEntry(index)(a1);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iii(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiii(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiii(index,a1,a2,a3,a4){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiii(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_fiii(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_diii(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viid(index,a1,a2,a3){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viii(index,a1,a2,a3){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiidi(index,a1,a2,a3,a4,a5){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_i(index){var sp=stackSave();try{return getWasmTableEntry(index)()}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iddii(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_idii(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiidiii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_di(index,a1){var sp=stackSave();try{return getWasmTableEntry(index)(a1)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vd(index,a1){var sp=stackSave();try{getWasmTableEntry(index)(a1);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iid(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiid(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_dii(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vidi(index,a1,a2,a3){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viddddi(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iidi(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiidddddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiidddddddddddddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiidddi(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiidddddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiidddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiid(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiid(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viidd(index,a1,a2,a3,a4){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vidddd(index,a1,a2,a3,a4,a5){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viddi(index,a1,a2,a3,a4){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_id(index,a1){var sp=stackSave();try{return getWasmTableEntry(index)(a1)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vid(index,a1,a2){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iidd(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vidd(index,a1,a2,a3){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiddidid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viidii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiddddiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiddidid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iidddd(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viddddiii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddddi(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_diidi(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddd(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiid(index,a1,a2,a3,a4){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viidiii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viidi(index,a1,a2,a3,a4){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_diid(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_dd(index,a1){var sp=stackSave();try{return getWasmTableEntry(index)(a1)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiidi(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viddd(index,a1,a2,a3,a4){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_ddi(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iddddii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiddd(index,a1,a2,a3,a4,a5){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iidddi(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiifii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_diiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiidddddd(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddiii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiddd(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiidiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiidi(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddi(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiiiiidididid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiid(index,a1,a2,a3,a4,a5){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiddi(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiidddddddddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiidddddddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiidddddddddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiidii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iidddddd(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddddd(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_ddd(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiidii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddddddd(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iddddiiiiiiiiiiiiiiiifiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiidiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_did(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddddiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iidddddddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiidddddddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiidddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiidddddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiddii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiddd(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_diiiiii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiddddddddid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viidddddd(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vidiii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiiiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iidddddiiiddddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiidddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viidddd(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_idddddddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiddd(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iifiii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiddddiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_idi(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiidiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiidiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiddddii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiddiii(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiddi(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiddddii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viddddii(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiddddiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiddddiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiddddiiiidddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiidddii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiidddiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vidii(index,a1,a2,a3,a4){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_idd(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiidf(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiidi(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiffiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiddiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiidiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiid(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiddiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiidddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiidd(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiddddi(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiidddd(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iidiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiidddiddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vidddi(index,a1,a2,a3,a4,a5){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vidiiii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vdddi(index,a1,a2,a3,a4){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiidi(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vddddii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddddiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_diiii(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiddiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiddiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiddddddddid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiidddddddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiidd(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_ddii(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiddd(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiddiiiiiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jiiii(index,a1,a2,a3,a4){var sp=stackSave();try{return dynCall_jiiii(index,a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viijj(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{dynCall_viijj(index,a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_ji(index,a1){var sp=stackSave();try{return dynCall_ji(index,a1)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jii(index,a1,a2){var sp=stackSave();try{return dynCall_jii(index,a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiji(index,a1,a2,a3,a4){var sp=stackSave();try{return dynCall_iiji(index,a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iij(index,a1,a2,a3){var sp=stackSave();try{return dynCall_iij(index,a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiijjjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return dynCall_iiiijjjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiij(index,a1,a2,a3,a4){var sp=stackSave();try{return dynCall_iiij(index,a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_j(index){var sp=stackSave();try{return dynCall_j(index)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return dynCall_iiiiiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viijii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{dynCall_viijii(index,a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiij(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return dynCall_iiiiij(index,a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vij(index,a1,a2,a3){var sp=stackSave();try{dynCall_vij(index,a1,a2,a3);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jiii(index,a1,a2,a3){var sp=stackSave();try{return dynCall_jiii(index,a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiij(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{dynCall_viiiij(index,a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiji(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return dynCall_iiiiiji(index,a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiijiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return dynCall_iiijiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiji(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{dynCall_viiiji(index,a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return dynCall_iiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vj(index,a1,a2){var sp=stackSave();try{dynCall_vj(index,a1,a2);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viij(index,a1,a2,a3,a4){var sp=stackSave();try{dynCall_viij(index,a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_ij(index,a1,a2){var sp=stackSave();try{return dynCall_ij(index,a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiijji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15){var sp=stackSave();try{return dynCall_iiiiiiiiiiijji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiiiiji(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{dynCall_viiiiiji(index,a1,a2,a3,a4,a5,a6,a7,a8);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiijii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return dynCall_iiiiiijii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiijiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return dynCall_iiiiiiijiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiijji(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return dynCall_iiiijji(index,a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiij(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return dynCall_iiiiiij(index,a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiijiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return dynCall_iiijiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiiijjji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19){var sp=stackSave();try{return dynCall_iiiiiiiiiiiiijjji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiji(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return dynCall_iiiiji(index,a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiji(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return dynCall_iiiji(index,a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiijiii(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return dynCall_iiijiii(index,a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25){var sp=stackSave();try{return dynCall_jiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiijjiji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return dynCall_iiijjiji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18){var sp=stackSave();try{return dynCall_iiiiiiiiiiiiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return dynCall_iiiiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iji(index,a1,a2,a3){var sp=stackSave();try{return dynCall_iji(index,a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vijii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{dynCall_vijii(index,a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vijjj(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{dynCall_vijjj(index,a1,a2,a3,a4,a5,a6,a7);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiij(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return dynCall_iiiij(index,a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vijj(index,a1,a2,a3,a4,a5){var sp=stackSave();try{dynCall_vijj(index,a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiijj(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{dynCall_viiijj(index,a1,a2,a3,a4,a5,a6,a7);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiijj(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{return dynCall_iiijj(index,a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jiiji(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return dynCall_jiiji(index,a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiijiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return dynCall_iiijiiii(index,a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jiijji(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{return dynCall_jiijji(index,a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiijiiiji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return dynCall_iiijiiiji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viijjji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{dynCall_viijjji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiijjji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14){var sp=stackSave();try{return dynCall_iiiiiiiijjji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiijiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){var sp=stackSave();try{return dynCall_iiiiiiiijiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return dynCall_iiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return dynCall_iiiiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiijji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return dynCall_iiiiiiijji(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vijiii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{dynCall_vijiii(index,a1,a2,a3,a4,a5,a6);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vijid(index,a1,a2,a3,a4,a5){var sp=stackSave();try{dynCall_vijid(index,a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iijii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return dynCall_iijii(index,a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiijii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){var sp=stackSave();try{return dynCall_iiiiiiiijii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiijiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return dynCall_iiiiijiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jijj(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return dynCall_jijj(index,a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viijji(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{dynCall_viijji(index,a1,a2,a3,a4,a5,a6,a7);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_vijiidddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{dynCall_vijiidddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jiiid(index,a1,a2,a3,a4){var sp=stackSave();try{return dynCall_jiiid(index,a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iijjjddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return dynCall_iijjjddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jij(index,a1,a2,a3){var sp=stackSave();try{return dynCall_jij(index,a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiijj(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){var sp=stackSave();try{return dynCall_iiiiiijj(index,a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16){var sp=stackSave();try{return dynCall_iiiiiiiiiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiji(index,a1,a2,a3,a4,a5){var sp=stackSave();try{dynCall_viiji(index,a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_jji(index,a1,a2,a3){var sp=stackSave();try{return dynCall_jji(index,a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viji(index,a1,a2,a3,a4){var sp=stackSave();try{dynCall_viji(index,a1,a2,a3,a4);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_viiij(index,a1,a2,a3,a4,a5){var sp=stackSave();try{dynCall_viiij(index,a1,a2,a3,a4,a5);}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiddddj(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return dynCall_iiiddddj(index,a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){var sp=stackSave();try{return dynCall_iiiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiiiiiiiiiiiijj(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17){var sp=stackSave();try{return dynCall_iiiiiiiiiiiiiijj(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}Module["stringToUTF8"]=stringToUTF8;Module["lengthBytesUTF8"]=lengthBytesUTF8;Module["addRunDependency"]=addRunDependency;Module["removeRunDependency"]=removeRunDependency;Module["FS_createPath"]=FS.createPath;Module["FS_createDataFile"]=FS.createDataFile;Module["FS_createPreloadedFile"]=FS.createPreloadedFile;Module["FS_createLazyFile"]=FS.createLazyFile;Module["FS_createDevice"]=FS.createDevice;Module["FS_unlink"]=FS.unlink;Module["ENV"]=ENV;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["addFunction"]=addFunction;Module["setValue"]=setValue;Module["getValue"]=getValue;Module["FS"]=FS;Module["MEMFS"]=MEMFS;Module["WORKERFS"]=WORKERFS;Module["NODEFS"]=NODEFS;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller;};function run(args){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun();}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("");},1);doRun();},1);}else {doRun();}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()();}}run();


    return CModule.ready
  }
  );
  })();
  module.exports = CModule;
  }(gdal3WebAssembly));

  var CModule = gdal3WebAssembly.exports;

  const GDALFunctions = {
      Module: {},
  };

  function initCFunctions() {
      if (GDALFunctions.GDALOpen) return;
      const Module = GDALFunctions.Module;

      Module.ccall('GDALAllRegister', null, [], []);

      GDALFunctions.GDALOpen = Module.cwrap('GDALOpen', 'number', ['string']);
      GDALFunctions.GDALOpenEx = Module.cwrap('GDALOpenEx', 'number', [
          'string', // char * the destination dataset path or NULL.
          'number', // unsigned int a combination of GDAL_OF_ flags that may be combined through logical or operator.
          'number', // char ** null-terminated array of strings with the driver short names that must be considered.
          'number', // char ** null-terminated array of strings with the dataset open options.
          'number', // char ** null-terminated array of strings that are filenames auxiliary to the main filename.
      ]);
      GDALFunctions.GDALClose = Module.cwrap('GDALClose', null, ['number']);
      GDALFunctions.CPLErrorReset = Module.cwrap('CPLErrorReset', null, []);
      GDALFunctions.CPLSetErrorHandler = Module.cwrap('CPLSetErrorHandler', 'number', ['number']);
      GDALFunctions.CPLQuietErrorHandler = Module.cwrap('CPLQuietErrorHandler', null, ['number', 'number', 'string']);
      // const cplQuietFnPtr = Module.addFunction(GDALFunctions.CPLQuietErrorHandler, 'viii');
      GDALFunctions.CPLGetLastErrorNo = Module.cwrap('CPLGetLastErrorNo', 'number', []);
      GDALFunctions.CPLGetLastErrorMsg = Module.cwrap('CPLGetLastErrorMsg', 'string', []);
      GDALFunctions.CPLGetLastErrorType = Module.cwrap('CPLGetLastErrorType', 'number', []);
      GDALFunctions.CPLSetConfigOption = Module.cwrap('CPLSetConfigOption', null, ['string', 'string']);
      GDALFunctions.CPLSetThreadLocalConfigOption = Module.cwrap('CPLSetThreadLocalConfigOption', null, ['string', 'string']);
      GDALFunctions.GDALGetRasterCount = Module.cwrap('GDALGetRasterCount', 'number', ['number']);
      GDALFunctions.GDALGetRasterXSize = Module.cwrap('GDALGetRasterXSize', 'number', ['number']);
      GDALFunctions.GDALGetRasterYSize = Module.cwrap('GDALGetRasterYSize', 'number', ['number']);
      GDALFunctions.GDALGetProjectionRef = Module.cwrap('GDALGetProjectionRef', 'string', ['number']);
      GDALFunctions.GDALGetGeoTransform = Module.cwrap('GDALGetGeoTransform', 'number', ['number', 'number']);
      GDALFunctions.GDALVectorTranslate = Module.cwrap('GDALVectorTranslate', 'number', [
          'string', // char * the destination dataset path or NULL.
          'number', // GDALDatasetH the destination dataset or NULL.
          'number', // int the number of input datasets (only 1 supported currently)
          'number', // GDALDatasetH the list of input datasets.
          'number', // GDALVectorTranslateOptions * options object to use
          'number', // int * pbUsageError
      ]);
      GDALFunctions.GDALVectorTranslateOptionsNew = Module.cwrap('GDALVectorTranslateOptionsNew', 'number', ['number', 'number']);
      GDALFunctions.GDALVectorTranslateOptionsFree = Module.cwrap('GDALVectorTranslateOptionsFree', 'number', ['number']);
      GDALFunctions.GDALDatasetGetLayerCount = Module.cwrap('GDALDatasetGetLayerCount', 'number', ['number']);
      GDALFunctions.GDALDatasetGetLayer = Module.cwrap('GDALDatasetGetLayer', 'number', ['number', 'number']);
      GDALFunctions.OGR_DS_GetLayerCount = Module.cwrap('OGR_DS_GetLayerCount', 'number', ['number']);
      GDALFunctions.OGR_DS_GetName = Module.cwrap('OGR_DS_GetName', 'string', ['number']);
      GDALFunctions.OGR_DS_GetLayer = Module.cwrap('OGR_DS_GetLayer', 'number', ['number', 'number']);
      GDALFunctions.OGR_L_GetName = Module.cwrap('OGR_L_GetName', 'string', ['number']);

      GDALFunctions.OGR_DS_GetDriver = Module.cwrap('OGR_DS_GetDriver', 'number', ['number']);
      GDALFunctions.OGR_Dr_GetName = Module.cwrap('OGR_Dr_GetName', 'string', ['number']);
      GDALFunctions.GDALGetDatasetDriver = Module.cwrap('GDALGetDatasetDriver', 'number', ['number']);
      GDALFunctions.GDALGetDriverLongName = Module.cwrap('GDALGetDriverLongName', 'string', ['number']);
      GDALFunctions.GDALGetDriverShortName = Module.cwrap('GDALGetDriverShortName', 'string', ['number']);

      GDALFunctions.GDALTranslate = Module.cwrap('GDALTranslate', 'number', [
          'string', // char * output filename
          'number', // GDALDatasetH dataset to translate
          'number', // GDALTranslateOptions * options object to use
          'number', // int * pbUsageError
      ]);
      GDALFunctions.GDALTranslateOptionsNew = Module.cwrap('GDALTranslateOptionsNew', 'number', ['number', 'number']);
      GDALFunctions.GDALTranslateOptionsFree = Module.cwrap('GDALTranslateOptionsFree', 'number', ['number']);

      GDALFunctions.GDALRasterize = Module.cwrap('GDALRasterize', 'number', ['string', 'number', 'number', 'number', 'number']);
      GDALFunctions.GDALRasterizeOptionsNew = Module.cwrap('GDALRasterizeOptionsNew', 'number', ['number', 'number']);
      GDALFunctions.GDALRasterizeOptionsFree = Module.cwrap('GDALRasterizeOptionsFree', 'number', ['number']);

      GDALFunctions.GDALWarp = Module.cwrap('GDALWarp', 'number', [
          'string', // Destination dataset path or NULL
          'number', // GDALDatasetH destination dataset or NULL
          'number', // Number of input datasets
          'number', // GDALDatasetH * list of source datasets
          'number', // GDALWarpAppOptions *
          'number', // int * to store errors in if they occur
      ]);
      GDALFunctions.GDALWarpAppOptionsNew = Module.cwrap('GDALWarpAppOptionsNew', 'number', [
          'number', // char ** null-terminated array of option strings as to gdalwarp executable
          'number', // pointer to struct that should usually be null
      ]);
      GDALFunctions.GDALWarpAppOptionsSetProgress = Module.cwrap('GDALWarpAppOptionsSetProgress', 'number', [
          'number', // GDALWarpAppOptions *
          'number', // GDALProgressFunc
          'number', // void * progress function data
      ]);
      GDALFunctions.GDALWarpAppOptionsFree = Module.cwrap('GDALWarpAppOptionsFree', 'number', [
          'number', // GDALWarpAppOptions *
      ]);

      GDALFunctions.OSRNewSpatialReference = Module.cwrap('OSRNewSpatialReference', 'number', ['string']);
      GDALFunctions.OSRDestroySpatialReference = Module.cwrap('OSRDestroySpatialReference', 'number', [
          'number', // SpatialReferenceH
      ]);
      GDALFunctions.OCTNewCoordinateTransformation = Module.cwrap(
          'OCTNewCoordinateTransformation',
          'number',
          ['number', 'number'],
      );
      GDALFunctions.OCTDestroyCoordinateTransformation = Module.cwrap('OCTDestroyCoordinateTransformation', 'number', [
          'number', // CoordinateTransformationH
      ]);
      GDALFunctions.OCTTransform = Module.cwrap(
          'OCTTransform',
          'number',
          ['number', 'number', 'number', 'number', 'number'],
      );

      GDALFunctions.GDALGetDriverCount = Module.cwrap('GDALGetDriverCount', 'number', []);
      GDALFunctions.OGRGetDriverCount = Module.cwrap('OGRGetDriverCount', 'number', []);
      GDALFunctions.GDALGetDriver = Module.cwrap('GDALGetDriver', 'number', ['number']);
      GDALFunctions.OGRGetDriver = Module.cwrap('OGRGetDriver', 'number', ['number']);
      GDALFunctions.GDALGetMetadataItem = Module.cwrap('GDALGetMetadataItem', 'string', ['number', 'string', 'string']);
      GDALFunctions.GDALGetDescription = Module.cwrap('GDALGetDescription', 'string', ['number']);
      GDALFunctions.OGR_L_GetFeatureCount = Module.cwrap('OGR_L_GetFeatureCount', 'number', ['number', 'number']);

      GDALFunctions.GDALGenImgProjTransform = Module.cwrap('GDALGenImgProjTransform', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number']);
      GDALFunctions.GDALCreateGenImgProjTransformer2 = Module.cwrap('GDALCreateGenImgProjTransformer2', 'number', ['number', 'number', 'number']);
      GDALFunctions.GDALDestroyGenImgProjTransformer = Module.cwrap('GDALDestroyGenImgProjTransformer', null, ['number']);

      GDALFunctions.OSRSetFromUserInput = Module.cwrap('OSRSetFromUserInput', 'number', ['number', 'string']);

      // GDALFunctions.CPLSetErrorHandler(cplQuietFnPtr);
  }

  function getGdalError() {
      const message = GDALFunctions.CPLGetLastErrorMsg();
      const no = GDALFunctions.CPLGetLastErrorNo();
      GDALFunctions.CPLErrorReset();
      return { no, message };
  }

  function getSystemError(message) {
      return { no: -1, message };
  }

  /* eslint-disable no-underscore-dangle */

  function getOptions(options) {
      const appOptions = [];
      const appConfig = {};
      for (let i = 0; i < options.length; i += 1) {
          const option = options[i];
          if (option === '--config') {
              appConfig[options[i + 1]] = options[i + 2];
              i += 2;
          } else {
              appOptions.push(option);
          }
      }
      const ptrsArray = appOptions.map((str) => GDALFunctions.Module._malloc(GDALFunctions.Module.lengthBytesUTF8(str) + 1));
      ptrsArray.push(0);
      const strPtrs = Uint32Array.from(ptrsArray);
      appOptions.forEach((str, i) => {
          GDALFunctions.Module.stringToUTF8(str, strPtrs[i], GDALFunctions.Module.lengthBytesUTF8(str) + 1);
      });
      const ptrOffset = GDALFunctions.Module._malloc(strPtrs.length * strPtrs.BYTES_PER_ELEMENT);
      GDALFunctions.Module.HEAPU32.set(strPtrs, ptrOffset / strPtrs.BYTES_PER_ELEMENT);
      return { ptr: ptrOffset, ptrArray: ptrsArray, config: appConfig };
  }

  function clearOptions(i) {
      GDALFunctions.Module._free(i.ptr);
      i.ptrArray.forEach((ptr) => { GDALFunctions.Module._free(ptr); });
  }

  const INPUTPATH = '/input';
  const OUTPUTPATH = '/output';

  let realOutputPath = OUTPUTPATH;

  function getRealOutputPath() {
      return realOutputPath;
  }

  function setRealOutputPath(path) {
      realOutputPath = path;
  }

  var sax$1 = {};

  (function (exports) {
  (function (sax) { // wrapper for non-node envs
    sax.parser = function (strict, opt) { return new SAXParser(strict, opt) };
    sax.SAXParser = SAXParser;
    sax.SAXStream = SAXStream;
    sax.createStream = createStream;

    // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
    // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
    // since that's the earliest that a buffer overrun could occur.  This way, checks are
    // as rare as required, but as often as necessary to ensure never crossing this bound.
    // Furthermore, buffers are only tested at most once per write(), so passing a very
    // large string into write() might have undesirable effects, but this is manageable by
    // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
    // edge case, result in creating at most one complete copy of the string passed in.
    // Set to Infinity to have unlimited buffers.
    sax.MAX_BUFFER_LENGTH = 64 * 1024;

    var buffers = [
      'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
      'procInstName', 'procInstBody', 'entity', 'attribName',
      'attribValue', 'cdata', 'script'
    ];

    sax.EVENTS = [
      'text',
      'processinginstruction',
      'sgmldeclaration',
      'doctype',
      'comment',
      'opentagstart',
      'attribute',
      'opentag',
      'closetag',
      'opencdata',
      'cdata',
      'closecdata',
      'error',
      'end',
      'ready',
      'script',
      'opennamespace',
      'closenamespace'
    ];

    function SAXParser (strict, opt) {
      if (!(this instanceof SAXParser)) {
        return new SAXParser(strict, opt)
      }

      var parser = this;
      clearBuffers(parser);
      parser.q = parser.c = '';
      parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
      parser.opt = opt || {};
      parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
      parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase';
      parser.tags = [];
      parser.closed = parser.closedRoot = parser.sawRoot = false;
      parser.tag = parser.error = null;
      parser.strict = !!strict;
      parser.noscript = !!(strict || parser.opt.noscript);
      parser.state = S.BEGIN;
      parser.strictEntities = parser.opt.strictEntities;
      parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
      parser.attribList = [];

      // namespaces form a prototype chain.
      // it always points at the current tag,
      // which protos to its parent tag.
      if (parser.opt.xmlns) {
        parser.ns = Object.create(rootNS);
      }

      // mostly just for error reporting
      parser.trackPosition = parser.opt.position !== false;
      if (parser.trackPosition) {
        parser.position = parser.line = parser.column = 0;
      }
      emit(parser, 'onready');
    }

    if (!Object.create) {
      Object.create = function (o) {
        function F () {}
        F.prototype = o;
        var newf = new F();
        return newf
      };
    }

    if (!Object.keys) {
      Object.keys = function (o) {
        var a = [];
        for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
        return a
      };
    }

    function checkBufferLength (parser) {
      var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
      var maxActual = 0;
      for (var i = 0, l = buffers.length; i < l; i++) {
        var len = parser[buffers[i]].length;
        if (len > maxAllowed) {
          // Text/cdata nodes can get big, and since they're buffered,
          // we can get here under normal conditions.
          // Avoid issues by emitting the text node now,
          // so at least it won't get any bigger.
          switch (buffers[i]) {
            case 'textNode':
              closeText(parser);
              break

            case 'cdata':
              emitNode(parser, 'oncdata', parser.cdata);
              parser.cdata = '';
              break

            case 'script':
              emitNode(parser, 'onscript', parser.script);
              parser.script = '';
              break

            default:
              error(parser, 'Max buffer length exceeded: ' + buffers[i]);
          }
        }
        maxActual = Math.max(maxActual, len);
      }
      // schedule the next check for the earliest possible buffer overrun.
      var m = sax.MAX_BUFFER_LENGTH - maxActual;
      parser.bufferCheckPosition = m + parser.position;
    }

    function clearBuffers (parser) {
      for (var i = 0, l = buffers.length; i < l; i++) {
        parser[buffers[i]] = '';
      }
    }

    function flushBuffers (parser) {
      closeText(parser);
      if (parser.cdata !== '') {
        emitNode(parser, 'oncdata', parser.cdata);
        parser.cdata = '';
      }
      if (parser.script !== '') {
        emitNode(parser, 'onscript', parser.script);
        parser.script = '';
      }
    }

    SAXParser.prototype = {
      end: function () { end(this); },
      write: write,
      resume: function () { this.error = null; return this },
      close: function () { return this.write(null) },
      flush: function () { flushBuffers(this); }
    };

    var Stream;
    try {
      Stream = require('stream').Stream;
    } catch (ex) {
      Stream = function () {};
    }

    var streamWraps = sax.EVENTS.filter(function (ev) {
      return ev !== 'error' && ev !== 'end'
    });

    function createStream (strict, opt) {
      return new SAXStream(strict, opt)
    }

    function SAXStream (strict, opt) {
      if (!(this instanceof SAXStream)) {
        return new SAXStream(strict, opt)
      }

      Stream.apply(this);

      this._parser = new SAXParser(strict, opt);
      this.writable = true;
      this.readable = true;

      var me = this;

      this._parser.onend = function () {
        me.emit('end');
      };

      this._parser.onerror = function (er) {
        me.emit('error', er);

        // if didn't throw, then means error was handled.
        // go ahead and clear error, so we can write again.
        me._parser.error = null;
      };

      this._decoder = null;

      streamWraps.forEach(function (ev) {
        Object.defineProperty(me, 'on' + ev, {
          get: function () {
            return me._parser['on' + ev]
          },
          set: function (h) {
            if (!h) {
              me.removeAllListeners(ev);
              me._parser['on' + ev] = h;
              return h
            }
            me.on(ev, h);
          },
          enumerable: true,
          configurable: false
        });
      });
    }

    SAXStream.prototype = Object.create(Stream.prototype, {
      constructor: {
        value: SAXStream
      }
    });

    SAXStream.prototype.write = function (data) {
      if (typeof Buffer === 'function' &&
        typeof Buffer.isBuffer === 'function' &&
        Buffer.isBuffer(data)) {
        if (!this._decoder) {
          var SD = require$$0__default$1["default"].StringDecoder;
          this._decoder = new SD('utf8');
        }
        data = this._decoder.write(data);
      }

      this._parser.write(data.toString());
      this.emit('data', data);
      return true
    };

    SAXStream.prototype.end = function (chunk) {
      if (chunk && chunk.length) {
        this.write(chunk);
      }
      this._parser.end();
      return true
    };

    SAXStream.prototype.on = function (ev, handler) {
      var me = this;
      if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
        me._parser['on' + ev] = function () {
          var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          args.splice(0, 0, ev);
          me.emit.apply(me, args);
        };
      }

      return Stream.prototype.on.call(me, ev, handler)
    };

    // this really needs to be replaced with character classes.
    // XML allows all manner of ridiculous numbers and digits.
    var CDATA = '[CDATA[';
    var DOCTYPE = 'DOCTYPE';
    var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
    var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
    var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };

    // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
    // This implementation works on strings, a single character at a time
    // as such, it cannot ever support astral-plane characters (10000-EFFFF)
    // without a significant breaking change to either this  parser, or the
    // JavaScript language.  Implementation of an emoji-capable xml parser
    // is left as an exercise for the reader.
    var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;

    var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

    var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

    function isWhitespace (c) {
      return c === ' ' || c === '\n' || c === '\r' || c === '\t'
    }

    function isQuote (c) {
      return c === '"' || c === '\''
    }

    function isAttribEnd (c) {
      return c === '>' || isWhitespace(c)
    }

    function isMatch (regex, c) {
      return regex.test(c)
    }

    function notMatch (regex, c) {
      return !isMatch(regex, c)
    }

    var S = 0;
    sax.STATE = {
      BEGIN: S++, // leading byte order mark or whitespace
      BEGIN_WHITESPACE: S++, // leading whitespace
      TEXT: S++, // general stuff
      TEXT_ENTITY: S++, // &amp and such.
      OPEN_WAKA: S++, // <
      SGML_DECL: S++, // <!BLARG
      SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
      DOCTYPE: S++, // <!DOCTYPE
      DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
      DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
      DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
      COMMENT_STARTING: S++, // <!-
      COMMENT: S++, // <!--
      COMMENT_ENDING: S++, // <!-- blah -
      COMMENT_ENDED: S++, // <!-- blah --
      CDATA: S++, // <![CDATA[ something
      CDATA_ENDING: S++, // ]
      CDATA_ENDING_2: S++, // ]]
      PROC_INST: S++, // <?hi
      PROC_INST_BODY: S++, // <?hi there
      PROC_INST_ENDING: S++, // <?hi "there" ?
      OPEN_TAG: S++, // <strong
      OPEN_TAG_SLASH: S++, // <strong /
      ATTRIB: S++, // <a
      ATTRIB_NAME: S++, // <a foo
      ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
      ATTRIB_VALUE: S++, // <a foo=
      ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
      ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
      ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
      ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
      ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
      CLOSE_TAG: S++, // </a
      CLOSE_TAG_SAW_WHITE: S++, // </a   >
      SCRIPT: S++, // <script> ...
      SCRIPT_ENDING: S++ // <script> ... <
    };

    sax.XML_ENTITIES = {
      'amp': '&',
      'gt': '>',
      'lt': '<',
      'quot': '"',
      'apos': "'"
    };

    sax.ENTITIES = {
      'amp': '&',
      'gt': '>',
      'lt': '<',
      'quot': '"',
      'apos': "'",
      'AElig': 198,
      'Aacute': 193,
      'Acirc': 194,
      'Agrave': 192,
      'Aring': 197,
      'Atilde': 195,
      'Auml': 196,
      'Ccedil': 199,
      'ETH': 208,
      'Eacute': 201,
      'Ecirc': 202,
      'Egrave': 200,
      'Euml': 203,
      'Iacute': 205,
      'Icirc': 206,
      'Igrave': 204,
      'Iuml': 207,
      'Ntilde': 209,
      'Oacute': 211,
      'Ocirc': 212,
      'Ograve': 210,
      'Oslash': 216,
      'Otilde': 213,
      'Ouml': 214,
      'THORN': 222,
      'Uacute': 218,
      'Ucirc': 219,
      'Ugrave': 217,
      'Uuml': 220,
      'Yacute': 221,
      'aacute': 225,
      'acirc': 226,
      'aelig': 230,
      'agrave': 224,
      'aring': 229,
      'atilde': 227,
      'auml': 228,
      'ccedil': 231,
      'eacute': 233,
      'ecirc': 234,
      'egrave': 232,
      'eth': 240,
      'euml': 235,
      'iacute': 237,
      'icirc': 238,
      'igrave': 236,
      'iuml': 239,
      'ntilde': 241,
      'oacute': 243,
      'ocirc': 244,
      'ograve': 242,
      'oslash': 248,
      'otilde': 245,
      'ouml': 246,
      'szlig': 223,
      'thorn': 254,
      'uacute': 250,
      'ucirc': 251,
      'ugrave': 249,
      'uuml': 252,
      'yacute': 253,
      'yuml': 255,
      'copy': 169,
      'reg': 174,
      'nbsp': 160,
      'iexcl': 161,
      'cent': 162,
      'pound': 163,
      'curren': 164,
      'yen': 165,
      'brvbar': 166,
      'sect': 167,
      'uml': 168,
      'ordf': 170,
      'laquo': 171,
      'not': 172,
      'shy': 173,
      'macr': 175,
      'deg': 176,
      'plusmn': 177,
      'sup1': 185,
      'sup2': 178,
      'sup3': 179,
      'acute': 180,
      'micro': 181,
      'para': 182,
      'middot': 183,
      'cedil': 184,
      'ordm': 186,
      'raquo': 187,
      'frac14': 188,
      'frac12': 189,
      'frac34': 190,
      'iquest': 191,
      'times': 215,
      'divide': 247,
      'OElig': 338,
      'oelig': 339,
      'Scaron': 352,
      'scaron': 353,
      'Yuml': 376,
      'fnof': 402,
      'circ': 710,
      'tilde': 732,
      'Alpha': 913,
      'Beta': 914,
      'Gamma': 915,
      'Delta': 916,
      'Epsilon': 917,
      'Zeta': 918,
      'Eta': 919,
      'Theta': 920,
      'Iota': 921,
      'Kappa': 922,
      'Lambda': 923,
      'Mu': 924,
      'Nu': 925,
      'Xi': 926,
      'Omicron': 927,
      'Pi': 928,
      'Rho': 929,
      'Sigma': 931,
      'Tau': 932,
      'Upsilon': 933,
      'Phi': 934,
      'Chi': 935,
      'Psi': 936,
      'Omega': 937,
      'alpha': 945,
      'beta': 946,
      'gamma': 947,
      'delta': 948,
      'epsilon': 949,
      'zeta': 950,
      'eta': 951,
      'theta': 952,
      'iota': 953,
      'kappa': 954,
      'lambda': 955,
      'mu': 956,
      'nu': 957,
      'xi': 958,
      'omicron': 959,
      'pi': 960,
      'rho': 961,
      'sigmaf': 962,
      'sigma': 963,
      'tau': 964,
      'upsilon': 965,
      'phi': 966,
      'chi': 967,
      'psi': 968,
      'omega': 969,
      'thetasym': 977,
      'upsih': 978,
      'piv': 982,
      'ensp': 8194,
      'emsp': 8195,
      'thinsp': 8201,
      'zwnj': 8204,
      'zwj': 8205,
      'lrm': 8206,
      'rlm': 8207,
      'ndash': 8211,
      'mdash': 8212,
      'lsquo': 8216,
      'rsquo': 8217,
      'sbquo': 8218,
      'ldquo': 8220,
      'rdquo': 8221,
      'bdquo': 8222,
      'dagger': 8224,
      'Dagger': 8225,
      'bull': 8226,
      'hellip': 8230,
      'permil': 8240,
      'prime': 8242,
      'Prime': 8243,
      'lsaquo': 8249,
      'rsaquo': 8250,
      'oline': 8254,
      'frasl': 8260,
      'euro': 8364,
      'image': 8465,
      'weierp': 8472,
      'real': 8476,
      'trade': 8482,
      'alefsym': 8501,
      'larr': 8592,
      'uarr': 8593,
      'rarr': 8594,
      'darr': 8595,
      'harr': 8596,
      'crarr': 8629,
      'lArr': 8656,
      'uArr': 8657,
      'rArr': 8658,
      'dArr': 8659,
      'hArr': 8660,
      'forall': 8704,
      'part': 8706,
      'exist': 8707,
      'empty': 8709,
      'nabla': 8711,
      'isin': 8712,
      'notin': 8713,
      'ni': 8715,
      'prod': 8719,
      'sum': 8721,
      'minus': 8722,
      'lowast': 8727,
      'radic': 8730,
      'prop': 8733,
      'infin': 8734,
      'ang': 8736,
      'and': 8743,
      'or': 8744,
      'cap': 8745,
      'cup': 8746,
      'int': 8747,
      'there4': 8756,
      'sim': 8764,
      'cong': 8773,
      'asymp': 8776,
      'ne': 8800,
      'equiv': 8801,
      'le': 8804,
      'ge': 8805,
      'sub': 8834,
      'sup': 8835,
      'nsub': 8836,
      'sube': 8838,
      'supe': 8839,
      'oplus': 8853,
      'otimes': 8855,
      'perp': 8869,
      'sdot': 8901,
      'lceil': 8968,
      'rceil': 8969,
      'lfloor': 8970,
      'rfloor': 8971,
      'lang': 9001,
      'rang': 9002,
      'loz': 9674,
      'spades': 9824,
      'clubs': 9827,
      'hearts': 9829,
      'diams': 9830
    };

    Object.keys(sax.ENTITIES).forEach(function (key) {
      var e = sax.ENTITIES[key];
      var s = typeof e === 'number' ? String.fromCharCode(e) : e;
      sax.ENTITIES[key] = s;
    });

    for (var s in sax.STATE) {
      sax.STATE[sax.STATE[s]] = s;
    }

    // shorthand
    S = sax.STATE;

    function emit (parser, event, data) {
      parser[event] && parser[event](data);
    }

    function emitNode (parser, nodeType, data) {
      if (parser.textNode) closeText(parser);
      emit(parser, nodeType, data);
    }

    function closeText (parser) {
      parser.textNode = textopts(parser.opt, parser.textNode);
      if (parser.textNode) emit(parser, 'ontext', parser.textNode);
      parser.textNode = '';
    }

    function textopts (opt, text) {
      if (opt.trim) text = text.trim();
      if (opt.normalize) text = text.replace(/\s+/g, ' ');
      return text
    }

    function error (parser, er) {
      closeText(parser);
      if (parser.trackPosition) {
        er += '\nLine: ' + parser.line +
          '\nColumn: ' + parser.column +
          '\nChar: ' + parser.c;
      }
      er = new Error(er);
      parser.error = er;
      emit(parser, 'onerror', er);
      return parser
    }

    function end (parser) {
      if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag');
      if ((parser.state !== S.BEGIN) &&
        (parser.state !== S.BEGIN_WHITESPACE) &&
        (parser.state !== S.TEXT)) {
        error(parser, 'Unexpected end');
      }
      closeText(parser);
      parser.c = '';
      parser.closed = true;
      emit(parser, 'onend');
      SAXParser.call(parser, parser.strict, parser.opt);
      return parser
    }

    function strictFail (parser, message) {
      if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
        throw new Error('bad call to strictFail')
      }
      if (parser.strict) {
        error(parser, message);
      }
    }

    function newTag (parser) {
      if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
      var parent = parser.tags[parser.tags.length - 1] || parser;
      var tag = parser.tag = { name: parser.tagName, attributes: {} };

      // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
      if (parser.opt.xmlns) {
        tag.ns = parent.ns;
      }
      parser.attribList.length = 0;
      emitNode(parser, 'onopentagstart', tag);
    }

    function qname (name, attribute) {
      var i = name.indexOf(':');
      var qualName = i < 0 ? [ '', name ] : name.split(':');
      var prefix = qualName[0];
      var local = qualName[1];

      // <x "xmlns"="http://foo">
      if (attribute && name === 'xmlns') {
        prefix = 'xmlns';
        local = '';
      }

      return { prefix: prefix, local: local }
    }

    function attrib (parser) {
      if (!parser.strict) {
        parser.attribName = parser.attribName[parser.looseCase]();
      }

      if (parser.attribList.indexOf(parser.attribName) !== -1 ||
        parser.tag.attributes.hasOwnProperty(parser.attribName)) {
        parser.attribName = parser.attribValue = '';
        return
      }

      if (parser.opt.xmlns) {
        var qn = qname(parser.attribName, true);
        var prefix = qn.prefix;
        var local = qn.local;

        if (prefix === 'xmlns') {
          // namespace binding attribute. push the binding into scope
          if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
            strictFail(parser,
              'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
              'Actual: ' + parser.attribValue);
          } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
            strictFail(parser,
              'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
              'Actual: ' + parser.attribValue);
          } else {
            var tag = parser.tag;
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns === parent.ns) {
              tag.ns = Object.create(parent.ns);
            }
            tag.ns[local] = parser.attribValue;
          }
        }

        // defer onattribute events until all attributes have been seen
        // so any new bindings can take effect. preserve attribute order
        // so deferred events can be emitted in document order
        parser.attribList.push([parser.attribName, parser.attribValue]);
      } else {
        // in non-xmlns mode, we can emit the event right away
        parser.tag.attributes[parser.attribName] = parser.attribValue;
        emitNode(parser, 'onattribute', {
          name: parser.attribName,
          value: parser.attribValue
        });
      }

      parser.attribName = parser.attribValue = '';
    }

    function openTag (parser, selfClosing) {
      if (parser.opt.xmlns) {
        // emit namespace binding events
        var tag = parser.tag;

        // add namespace info to tag
        var qn = qname(parser.tagName);
        tag.prefix = qn.prefix;
        tag.local = qn.local;
        tag.uri = tag.ns[qn.prefix] || '';

        if (tag.prefix && !tag.uri) {
          strictFail(parser, 'Unbound namespace prefix: ' +
            JSON.stringify(parser.tagName));
          tag.uri = qn.prefix;
        }

        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (tag.ns && parent.ns !== tag.ns) {
          Object.keys(tag.ns).forEach(function (p) {
            emitNode(parser, 'onopennamespace', {
              prefix: p,
              uri: tag.ns[p]
            });
          });
        }

        // handle deferred onattribute events
        // Note: do not apply default ns to attributes:
        //   http://www.w3.org/TR/REC-xml-names/#defaulting
        for (var i = 0, l = parser.attribList.length; i < l; i++) {
          var nv = parser.attribList[i];
          var name = nv[0];
          var value = nv[1];
          var qualName = qname(name, true);
          var prefix = qualName.prefix;
          var local = qualName.local;
          var uri = prefix === '' ? '' : (tag.ns[prefix] || '');
          var a = {
            name: name,
            value: value,
            prefix: prefix,
            local: local,
            uri: uri
          };

          // if there's any attributes with an undefined namespace,
          // then fail on them now.
          if (prefix && prefix !== 'xmlns' && !uri) {
            strictFail(parser, 'Unbound namespace prefix: ' +
              JSON.stringify(prefix));
            a.uri = prefix;
          }
          parser.tag.attributes[name] = a;
          emitNode(parser, 'onattribute', a);
        }
        parser.attribList.length = 0;
      }

      parser.tag.isSelfClosing = !!selfClosing;

      // process the tag
      parser.sawRoot = true;
      parser.tags.push(parser.tag);
      emitNode(parser, 'onopentag', parser.tag);
      if (!selfClosing) {
        // special case for <script> in non-strict mode.
        if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
          parser.state = S.SCRIPT;
        } else {
          parser.state = S.TEXT;
        }
        parser.tag = null;
        parser.tagName = '';
      }
      parser.attribName = parser.attribValue = '';
      parser.attribList.length = 0;
    }

    function closeTag (parser) {
      if (!parser.tagName) {
        strictFail(parser, 'Weird empty close tag.');
        parser.textNode += '</>';
        parser.state = S.TEXT;
        return
      }

      if (parser.script) {
        if (parser.tagName !== 'script') {
          parser.script += '</' + parser.tagName + '>';
          parser.tagName = '';
          parser.state = S.SCRIPT;
          return
        }
        emitNode(parser, 'onscript', parser.script);
        parser.script = '';
      }

      // first make sure that the closing tag actually exists.
      // <a><b></c></b></a> will close everything, otherwise.
      var t = parser.tags.length;
      var tagName = parser.tagName;
      if (!parser.strict) {
        tagName = tagName[parser.looseCase]();
      }
      var closeTo = tagName;
      while (t--) {
        var close = parser.tags[t];
        if (close.name !== closeTo) {
          // fail the first time in strict mode
          strictFail(parser, 'Unexpected close tag');
        } else {
          break
        }
      }

      // didn't find it.  we already failed for strict, so just abort.
      if (t < 0) {
        strictFail(parser, 'Unmatched closing tag: ' + parser.tagName);
        parser.textNode += '</' + parser.tagName + '>';
        parser.state = S.TEXT;
        return
      }
      parser.tagName = tagName;
      var s = parser.tags.length;
      while (s-- > t) {
        var tag = parser.tag = parser.tags.pop();
        parser.tagName = parser.tag.name;
        emitNode(parser, 'onclosetag', parser.tagName);

        var x = {};
        for (var i in tag.ns) {
          x[i] = tag.ns[i];
        }

        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (parser.opt.xmlns && tag.ns !== parent.ns) {
          // remove namespace bindings introduced by tag
          Object.keys(tag.ns).forEach(function (p) {
            var n = tag.ns[p];
            emitNode(parser, 'onclosenamespace', { prefix: p, uri: n });
          });
        }
      }
      if (t === 0) parser.closedRoot = true;
      parser.tagName = parser.attribValue = parser.attribName = '';
      parser.attribList.length = 0;
      parser.state = S.TEXT;
    }

    function parseEntity (parser) {
      var entity = parser.entity;
      var entityLC = entity.toLowerCase();
      var num;
      var numStr = '';

      if (parser.ENTITIES[entity]) {
        return parser.ENTITIES[entity]
      }
      if (parser.ENTITIES[entityLC]) {
        return parser.ENTITIES[entityLC]
      }
      entity = entityLC;
      if (entity.charAt(0) === '#') {
        if (entity.charAt(1) === 'x') {
          entity = entity.slice(2);
          num = parseInt(entity, 16);
          numStr = num.toString(16);
        } else {
          entity = entity.slice(1);
          num = parseInt(entity, 10);
          numStr = num.toString(10);
        }
      }
      entity = entity.replace(/^0+/, '');
      if (isNaN(num) || numStr.toLowerCase() !== entity) {
        strictFail(parser, 'Invalid character entity');
        return '&' + parser.entity + ';'
      }

      return String.fromCodePoint(num)
    }

    function beginWhiteSpace (parser, c) {
      if (c === '<') {
        parser.state = S.OPEN_WAKA;
        parser.startTagPosition = parser.position;
      } else if (!isWhitespace(c)) {
        // have to process this as a text node.
        // weird, but happens.
        strictFail(parser, 'Non-whitespace before first tag.');
        parser.textNode = c;
        parser.state = S.TEXT;
      }
    }

    function charAt (chunk, i) {
      var result = '';
      if (i < chunk.length) {
        result = chunk.charAt(i);
      }
      return result
    }

    function write (chunk) {
      var parser = this;
      if (this.error) {
        throw this.error
      }
      if (parser.closed) {
        return error(parser,
          'Cannot write after close. Assign an onready handler.')
      }
      if (chunk === null) {
        return end(parser)
      }
      if (typeof chunk === 'object') {
        chunk = chunk.toString();
      }
      var i = 0;
      var c = '';
      while (true) {
        c = charAt(chunk, i++);
        parser.c = c;

        if (!c) {
          break
        }

        if (parser.trackPosition) {
          parser.position++;
          if (c === '\n') {
            parser.line++;
            parser.column = 0;
          } else {
            parser.column++;
          }
        }

        switch (parser.state) {
          case S.BEGIN:
            parser.state = S.BEGIN_WHITESPACE;
            if (c === '\uFEFF') {
              continue
            }
            beginWhiteSpace(parser, c);
            continue

          case S.BEGIN_WHITESPACE:
            beginWhiteSpace(parser, c);
            continue

          case S.TEXT:
            if (parser.sawRoot && !parser.closedRoot) {
              var starti = i - 1;
              while (c && c !== '<' && c !== '&') {
                c = charAt(chunk, i++);
                if (c && parser.trackPosition) {
                  parser.position++;
                  if (c === '\n') {
                    parser.line++;
                    parser.column = 0;
                  } else {
                    parser.column++;
                  }
                }
              }
              parser.textNode += chunk.substring(starti, i - 1);
            }
            if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
              parser.state = S.OPEN_WAKA;
              parser.startTagPosition = parser.position;
            } else {
              if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                strictFail(parser, 'Text data outside of root node.');
              }
              if (c === '&') {
                parser.state = S.TEXT_ENTITY;
              } else {
                parser.textNode += c;
              }
            }
            continue

          case S.SCRIPT:
            // only non-strict
            if (c === '<') {
              parser.state = S.SCRIPT_ENDING;
            } else {
              parser.script += c;
            }
            continue

          case S.SCRIPT_ENDING:
            if (c === '/') {
              parser.state = S.CLOSE_TAG;
            } else {
              parser.script += '<' + c;
              parser.state = S.SCRIPT;
            }
            continue

          case S.OPEN_WAKA:
            // either a /, ?, !, or text is coming next.
            if (c === '!') {
              parser.state = S.SGML_DECL;
              parser.sgmlDecl = '';
            } else if (isWhitespace(c)) ; else if (isMatch(nameStart, c)) {
              parser.state = S.OPEN_TAG;
              parser.tagName = c;
            } else if (c === '/') {
              parser.state = S.CLOSE_TAG;
              parser.tagName = '';
            } else if (c === '?') {
              parser.state = S.PROC_INST;
              parser.procInstName = parser.procInstBody = '';
            } else {
              strictFail(parser, 'Unencoded <');
              // if there was some whitespace, then add that in.
              if (parser.startTagPosition + 1 < parser.position) {
                var pad = parser.position - parser.startTagPosition;
                c = new Array(pad).join(' ') + c;
              }
              parser.textNode += '<' + c;
              parser.state = S.TEXT;
            }
            continue

          case S.SGML_DECL:
            if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
              emitNode(parser, 'onopencdata');
              parser.state = S.CDATA;
              parser.sgmlDecl = '';
              parser.cdata = '';
            } else if (parser.sgmlDecl + c === '--') {
              parser.state = S.COMMENT;
              parser.comment = '';
              parser.sgmlDecl = '';
            } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
              parser.state = S.DOCTYPE;
              if (parser.doctype || parser.sawRoot) {
                strictFail(parser,
                  'Inappropriately located doctype declaration');
              }
              parser.doctype = '';
              parser.sgmlDecl = '';
            } else if (c === '>') {
              emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl);
              parser.sgmlDecl = '';
              parser.state = S.TEXT;
            } else if (isQuote(c)) {
              parser.state = S.SGML_DECL_QUOTED;
              parser.sgmlDecl += c;
            } else {
              parser.sgmlDecl += c;
            }
            continue

          case S.SGML_DECL_QUOTED:
            if (c === parser.q) {
              parser.state = S.SGML_DECL;
              parser.q = '';
            }
            parser.sgmlDecl += c;
            continue

          case S.DOCTYPE:
            if (c === '>') {
              parser.state = S.TEXT;
              emitNode(parser, 'ondoctype', parser.doctype);
              parser.doctype = true; // just remember that we saw it.
            } else {
              parser.doctype += c;
              if (c === '[') {
                parser.state = S.DOCTYPE_DTD;
              } else if (isQuote(c)) {
                parser.state = S.DOCTYPE_QUOTED;
                parser.q = c;
              }
            }
            continue

          case S.DOCTYPE_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.q = '';
              parser.state = S.DOCTYPE;
            }
            continue

          case S.DOCTYPE_DTD:
            parser.doctype += c;
            if (c === ']') {
              parser.state = S.DOCTYPE;
            } else if (isQuote(c)) {
              parser.state = S.DOCTYPE_DTD_QUOTED;
              parser.q = c;
            }
            continue

          case S.DOCTYPE_DTD_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.state = S.DOCTYPE_DTD;
              parser.q = '';
            }
            continue

          case S.COMMENT:
            if (c === '-') {
              parser.state = S.COMMENT_ENDING;
            } else {
              parser.comment += c;
            }
            continue

          case S.COMMENT_ENDING:
            if (c === '-') {
              parser.state = S.COMMENT_ENDED;
              parser.comment = textopts(parser.opt, parser.comment);
              if (parser.comment) {
                emitNode(parser, 'oncomment', parser.comment);
              }
              parser.comment = '';
            } else {
              parser.comment += '-' + c;
              parser.state = S.COMMENT;
            }
            continue

          case S.COMMENT_ENDED:
            if (c !== '>') {
              strictFail(parser, 'Malformed comment');
              // allow <!-- blah -- bloo --> in non-strict mode,
              // which is a comment of " blah -- bloo "
              parser.comment += '--' + c;
              parser.state = S.COMMENT;
            } else {
              parser.state = S.TEXT;
            }
            continue

          case S.CDATA:
            if (c === ']') {
              parser.state = S.CDATA_ENDING;
            } else {
              parser.cdata += c;
            }
            continue

          case S.CDATA_ENDING:
            if (c === ']') {
              parser.state = S.CDATA_ENDING_2;
            } else {
              parser.cdata += ']' + c;
              parser.state = S.CDATA;
            }
            continue

          case S.CDATA_ENDING_2:
            if (c === '>') {
              if (parser.cdata) {
                emitNode(parser, 'oncdata', parser.cdata);
              }
              emitNode(parser, 'onclosecdata');
              parser.cdata = '';
              parser.state = S.TEXT;
            } else if (c === ']') {
              parser.cdata += ']';
            } else {
              parser.cdata += ']]' + c;
              parser.state = S.CDATA;
            }
            continue

          case S.PROC_INST:
            if (c === '?') {
              parser.state = S.PROC_INST_ENDING;
            } else if (isWhitespace(c)) {
              parser.state = S.PROC_INST_BODY;
            } else {
              parser.procInstName += c;
            }
            continue

          case S.PROC_INST_BODY:
            if (!parser.procInstBody && isWhitespace(c)) {
              continue
            } else if (c === '?') {
              parser.state = S.PROC_INST_ENDING;
            } else {
              parser.procInstBody += c;
            }
            continue

          case S.PROC_INST_ENDING:
            if (c === '>') {
              emitNode(parser, 'onprocessinginstruction', {
                name: parser.procInstName,
                body: parser.procInstBody
              });
              parser.procInstName = parser.procInstBody = '';
              parser.state = S.TEXT;
            } else {
              parser.procInstBody += '?' + c;
              parser.state = S.PROC_INST_BODY;
            }
            continue

          case S.OPEN_TAG:
            if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else {
              newTag(parser);
              if (c === '>') {
                openTag(parser);
              } else if (c === '/') {
                parser.state = S.OPEN_TAG_SLASH;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser, 'Invalid character in tag name');
                }
                parser.state = S.ATTRIB;
              }
            }
            continue

          case S.OPEN_TAG_SLASH:
            if (c === '>') {
              openTag(parser, true);
              closeTag(parser);
            } else {
              strictFail(parser, 'Forward-slash in opening tag not followed by >');
              parser.state = S.ATTRIB;
            }
            continue

          case S.ATTRIB:
            // haven't read the attribute name yet.
            if (isWhitespace(c)) {
              continue
            } else if (c === '>') {
              openTag(parser);
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c;
              parser.attribValue = '';
              parser.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser, 'Invalid attribute name');
            }
            continue

          case S.ATTRIB_NAME:
            if (c === '=') {
              parser.state = S.ATTRIB_VALUE;
            } else if (c === '>') {
              strictFail(parser, 'Attribute without value');
              parser.attribValue = parser.attribName;
              attrib(parser);
              openTag(parser);
            } else if (isWhitespace(c)) {
              parser.state = S.ATTRIB_NAME_SAW_WHITE;
            } else if (isMatch(nameBody, c)) {
              parser.attribName += c;
            } else {
              strictFail(parser, 'Invalid attribute name');
            }
            continue

          case S.ATTRIB_NAME_SAW_WHITE:
            if (c === '=') {
              parser.state = S.ATTRIB_VALUE;
            } else if (isWhitespace(c)) {
              continue
            } else {
              strictFail(parser, 'Attribute without value');
              parser.tag.attributes[parser.attribName] = '';
              parser.attribValue = '';
              emitNode(parser, 'onattribute', {
                name: parser.attribName,
                value: ''
              });
              parser.attribName = '';
              if (c === '>') {
                openTag(parser);
              } else if (isMatch(nameStart, c)) {
                parser.attribName = c;
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, 'Invalid attribute name');
                parser.state = S.ATTRIB;
              }
            }
            continue

          case S.ATTRIB_VALUE:
            if (isWhitespace(c)) {
              continue
            } else if (isQuote(c)) {
              parser.q = c;
              parser.state = S.ATTRIB_VALUE_QUOTED;
            } else {
              strictFail(parser, 'Unquoted attribute value');
              parser.state = S.ATTRIB_VALUE_UNQUOTED;
              parser.attribValue = c;
            }
            continue

          case S.ATTRIB_VALUE_QUOTED:
            if (c !== parser.q) {
              if (c === '&') {
                parser.state = S.ATTRIB_VALUE_ENTITY_Q;
              } else {
                parser.attribValue += c;
              }
              continue
            }
            attrib(parser);
            parser.q = '';
            parser.state = S.ATTRIB_VALUE_CLOSED;
            continue

          case S.ATTRIB_VALUE_CLOSED:
            if (isWhitespace(c)) {
              parser.state = S.ATTRIB;
            } else if (c === '>') {
              openTag(parser);
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              strictFail(parser, 'No whitespace between attributes');
              parser.attribName = c;
              parser.attribValue = '';
              parser.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser, 'Invalid attribute name');
            }
            continue

          case S.ATTRIB_VALUE_UNQUOTED:
            if (!isAttribEnd(c)) {
              if (c === '&') {
                parser.state = S.ATTRIB_VALUE_ENTITY_U;
              } else {
                parser.attribValue += c;
              }
              continue
            }
            attrib(parser);
            if (c === '>') {
              openTag(parser);
            } else {
              parser.state = S.ATTRIB;
            }
            continue

          case S.CLOSE_TAG:
            if (!parser.tagName) {
              if (isWhitespace(c)) {
                continue
              } else if (notMatch(nameStart, c)) {
                if (parser.script) {
                  parser.script += '</' + c;
                  parser.state = S.SCRIPT;
                } else {
                  strictFail(parser, 'Invalid tagname in closing tag.');
                }
              } else {
                parser.tagName = c;
              }
            } else if (c === '>') {
              closeTag(parser);
            } else if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else if (parser.script) {
              parser.script += '</' + parser.tagName;
              parser.tagName = '';
              parser.state = S.SCRIPT;
            } else {
              if (!isWhitespace(c)) {
                strictFail(parser, 'Invalid tagname in closing tag');
              }
              parser.state = S.CLOSE_TAG_SAW_WHITE;
            }
            continue

          case S.CLOSE_TAG_SAW_WHITE:
            if (isWhitespace(c)) {
              continue
            }
            if (c === '>') {
              closeTag(parser);
            } else {
              strictFail(parser, 'Invalid characters in closing tag');
            }
            continue

          case S.TEXT_ENTITY:
          case S.ATTRIB_VALUE_ENTITY_Q:
          case S.ATTRIB_VALUE_ENTITY_U:
            var returnState;
            var buffer;
            switch (parser.state) {
              case S.TEXT_ENTITY:
                returnState = S.TEXT;
                buffer = 'textNode';
                break

              case S.ATTRIB_VALUE_ENTITY_Q:
                returnState = S.ATTRIB_VALUE_QUOTED;
                buffer = 'attribValue';
                break

              case S.ATTRIB_VALUE_ENTITY_U:
                returnState = S.ATTRIB_VALUE_UNQUOTED;
                buffer = 'attribValue';
                break
            }

            if (c === ';') {
              parser[buffer] += parseEntity(parser);
              parser.entity = '';
              parser.state = returnState;
            } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
              parser.entity += c;
            } else {
              strictFail(parser, 'Invalid character in entity name');
              parser[buffer] += '&' + parser.entity + c;
              parser.entity = '';
              parser.state = returnState;
            }

            continue

          default:
            throw new Error(parser, 'Unknown state: ' + parser.state)
        }
      } // while

      if (parser.position >= parser.bufferCheckPosition) {
        checkBufferLength(parser);
      }
      return parser
    }

    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    /* istanbul ignore next */
    if (!String.fromCodePoint) {
      (function () {
        var stringFromCharCode = String.fromCharCode;
        var floor = Math.floor;
        var fromCodePoint = function () {
          var MAX_SIZE = 0x4000;
          var codeUnits = [];
          var highSurrogate;
          var lowSurrogate;
          var index = -1;
          var length = arguments.length;
          if (!length) {
            return ''
          }
          var result = '';
          while (++index < length) {
            var codePoint = Number(arguments[index]);
            if (
              !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 0x10FFFF || // not a valid Unicode code point
              floor(codePoint) !== codePoint // not an integer
            ) {
              throw RangeError('Invalid code point: ' + codePoint)
            }
            if (codePoint <= 0xFFFF) { // BMP code point
              codeUnits.push(codePoint);
            } else { // Astral code point; split in surrogate halves
              // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
              codePoint -= 0x10000;
              highSurrogate = (codePoint >> 10) + 0xD800;
              lowSurrogate = (codePoint % 0x400) + 0xDC00;
              codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 === length || codeUnits.length > MAX_SIZE) {
              result += stringFromCharCode.apply(null, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result
        };
        /* istanbul ignore next */
        if (Object.defineProperty) {
          Object.defineProperty(String, 'fromCodePoint', {
            value: fromCodePoint,
            configurable: true,
            writable: true
          });
        } else {
          String.fromCodePoint = fromCodePoint;
        }
      }());
    }
  })(exports);
  }(sax$1));

  var arrayHelper = {

    isArray: function(value) {
      if (Array.isArray) {
        return Array.isArray(value);
      }
      // fallback for older browsers like  IE 8
      return Object.prototype.toString.call( value ) === '[object Array]';
    }

  };

  var isArray$2 = arrayHelper.isArray;

  var optionsHelper = {

    copyOptions: function (options) {
      var key, copy = {};
      for (key in options) {
        if (options.hasOwnProperty(key)) {
          copy[key] = options[key];
        }
      }
      return copy;
    },

    ensureFlagExists: function (item, options) {
      if (!(item in options) || typeof options[item] !== 'boolean') {
        options[item] = false;
      }
    },

    ensureSpacesExists: function (options) {
      if (!('spaces' in options) || (typeof options.spaces !== 'number' && typeof options.spaces !== 'string')) {
        options.spaces = 0;
      }
    },

    ensureAlwaysArrayExists: function (options) {
      if (!('alwaysArray' in options) || (typeof options.alwaysArray !== 'boolean' && !isArray$2(options.alwaysArray))) {
        options.alwaysArray = false;
      }
    },

    ensureKeyExists: function (key, options) {
      if (!(key + 'Key' in options) || typeof options[key + 'Key'] !== 'string') {
        options[key + 'Key'] = options.compact ? '_' + key : key;
      }
    },

    checkFnExists: function (key, options) {
      return key + 'Fn' in options;
    }

  };

  var sax = sax$1;
  var helper$2 = optionsHelper;
  var isArray$1 = arrayHelper.isArray;

  var options;
  var currentElement$1;

  function validateOptions$2(userOptions) {
    options = helper$2.copyOptions(userOptions);
    helper$2.ensureFlagExists('ignoreDeclaration', options);
    helper$2.ensureFlagExists('ignoreInstruction', options);
    helper$2.ensureFlagExists('ignoreAttributes', options);
    helper$2.ensureFlagExists('ignoreText', options);
    helper$2.ensureFlagExists('ignoreComment', options);
    helper$2.ensureFlagExists('ignoreCdata', options);
    helper$2.ensureFlagExists('ignoreDoctype', options);
    helper$2.ensureFlagExists('compact', options);
    helper$2.ensureFlagExists('alwaysChildren', options);
    helper$2.ensureFlagExists('addParent', options);
    helper$2.ensureFlagExists('trim', options);
    helper$2.ensureFlagExists('nativeType', options);
    helper$2.ensureFlagExists('nativeTypeAttributes', options);
    helper$2.ensureFlagExists('sanitize', options);
    helper$2.ensureFlagExists('instructionHasAttributes', options);
    helper$2.ensureFlagExists('captureSpacesBetweenElements', options);
    helper$2.ensureAlwaysArrayExists(options);
    helper$2.ensureKeyExists('declaration', options);
    helper$2.ensureKeyExists('instruction', options);
    helper$2.ensureKeyExists('attributes', options);
    helper$2.ensureKeyExists('text', options);
    helper$2.ensureKeyExists('comment', options);
    helper$2.ensureKeyExists('cdata', options);
    helper$2.ensureKeyExists('doctype', options);
    helper$2.ensureKeyExists('type', options);
    helper$2.ensureKeyExists('name', options);
    helper$2.ensureKeyExists('elements', options);
    helper$2.ensureKeyExists('parent', options);
    return options;
  }

  function nativeType(value) {
    var nValue = Number(value);
    if (!isNaN(nValue)) {
      return nValue;
    }
    var bValue = value.toLowerCase();
    if (bValue === 'true') {
      return true;
    } else if (bValue === 'false') {
      return false;
    }
    return value;
  }

  function addField(type, value) {
    var key;
    if (options.compact) {
      if (
        !currentElement$1[options[type + 'Key']] &&
        (isArray$1(options.alwaysArray) ? options.alwaysArray.indexOf(options[type + 'Key']) !== -1 : options.alwaysArray)
      ) {
        currentElement$1[options[type + 'Key']] = [];
      }
      if (currentElement$1[options[type + 'Key']] && !isArray$1(currentElement$1[options[type + 'Key']])) {
        currentElement$1[options[type + 'Key']] = [currentElement$1[options[type + 'Key']]];
      }
      if (type + 'Fn' in options && typeof value === 'string') {
        value = options[type + 'Fn'](value, currentElement$1);
      }
      if (type === 'instruction' && ('instructionFn' in options || 'instructionNameFn' in options)) {
        for (key in value) {
          if (value.hasOwnProperty(key)) {
            if ('instructionFn' in options) {
              value[key] = options.instructionFn(value[key], key, currentElement$1);
            } else {
              var temp = value[key];
              delete value[key];
              value[options.instructionNameFn(key, temp, currentElement$1)] = temp;
            }
          }
        }
      }
      if (isArray$1(currentElement$1[options[type + 'Key']])) {
        currentElement$1[options[type + 'Key']].push(value);
      } else {
        currentElement$1[options[type + 'Key']] = value;
      }
    } else {
      if (!currentElement$1[options.elementsKey]) {
        currentElement$1[options.elementsKey] = [];
      }
      var element = {};
      element[options.typeKey] = type;
      if (type === 'instruction') {
        for (key in value) {
          if (value.hasOwnProperty(key)) {
            break;
          }
        }
        element[options.nameKey] = 'instructionNameFn' in options ? options.instructionNameFn(key, value, currentElement$1) : key;
        if (options.instructionHasAttributes) {
          element[options.attributesKey] = value[key][options.attributesKey];
          if ('instructionFn' in options) {
            element[options.attributesKey] = options.instructionFn(element[options.attributesKey], key, currentElement$1);
          }
        } else {
          if ('instructionFn' in options) {
            value[key] = options.instructionFn(value[key], key, currentElement$1);
          }
          element[options.instructionKey] = value[key];
        }
      } else {
        if (type + 'Fn' in options) {
          value = options[type + 'Fn'](value, currentElement$1);
        }
        element[options[type + 'Key']] = value;
      }
      if (options.addParent) {
        element[options.parentKey] = currentElement$1;
      }
      currentElement$1[options.elementsKey].push(element);
    }
  }

  function manipulateAttributes(attributes) {
    if ('attributesFn' in options && attributes) {
      attributes = options.attributesFn(attributes, currentElement$1);
    }
    if ((options.trim || 'attributeValueFn' in options || 'attributeNameFn' in options || options.nativeTypeAttributes) && attributes) {
      var key;
      for (key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          if (options.trim) attributes[key] = attributes[key].trim();
          if (options.nativeTypeAttributes) {
            attributes[key] = nativeType(attributes[key]);
          }
          if ('attributeValueFn' in options) attributes[key] = options.attributeValueFn(attributes[key], key, currentElement$1);
          if ('attributeNameFn' in options) {
            var temp = attributes[key];
            delete attributes[key];
            attributes[options.attributeNameFn(key, attributes[key], currentElement$1)] = temp;
          }
        }
      }
    }
    return attributes;
  }

  function onInstruction(instruction) {
    var attributes = {};
    if (instruction.body && (instruction.name.toLowerCase() === 'xml' || options.instructionHasAttributes)) {
      var attrsRegExp = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;
      var match;
      while ((match = attrsRegExp.exec(instruction.body)) !== null) {
        attributes[match[1]] = match[2] || match[3] || match[4];
      }
      attributes = manipulateAttributes(attributes);
    }
    if (instruction.name.toLowerCase() === 'xml') {
      if (options.ignoreDeclaration) {
        return;
      }
      currentElement$1[options.declarationKey] = {};
      if (Object.keys(attributes).length) {
        currentElement$1[options.declarationKey][options.attributesKey] = attributes;
      }
      if (options.addParent) {
        currentElement$1[options.declarationKey][options.parentKey] = currentElement$1;
      }
    } else {
      if (options.ignoreInstruction) {
        return;
      }
      if (options.trim) {
        instruction.body = instruction.body.trim();
      }
      var value = {};
      if (options.instructionHasAttributes && Object.keys(attributes).length) {
        value[instruction.name] = {};
        value[instruction.name][options.attributesKey] = attributes;
      } else {
        value[instruction.name] = instruction.body;
      }
      addField('instruction', value);
    }
  }

  function onStartElement(name, attributes) {
    var element;
    if (typeof name === 'object') {
      attributes = name.attributes;
      name = name.name;
    }
    attributes = manipulateAttributes(attributes);
    if ('elementNameFn' in options) {
      name = options.elementNameFn(name, currentElement$1);
    }
    if (options.compact) {
      element = {};
      if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
        element[options.attributesKey] = {};
        var key;
        for (key in attributes) {
          if (attributes.hasOwnProperty(key)) {
            element[options.attributesKey][key] = attributes[key];
          }
        }
      }
      if (
        !(name in currentElement$1) &&
        (isArray$1(options.alwaysArray) ? options.alwaysArray.indexOf(name) !== -1 : options.alwaysArray)
      ) {
        currentElement$1[name] = [];
      }
      if (currentElement$1[name] && !isArray$1(currentElement$1[name])) {
        currentElement$1[name] = [currentElement$1[name]];
      }
      if (isArray$1(currentElement$1[name])) {
        currentElement$1[name].push(element);
      } else {
        currentElement$1[name] = element;
      }
    } else {
      if (!currentElement$1[options.elementsKey]) {
        currentElement$1[options.elementsKey] = [];
      }
      element = {};
      element[options.typeKey] = 'element';
      element[options.nameKey] = name;
      if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
        element[options.attributesKey] = attributes;
      }
      if (options.alwaysChildren) {
        element[options.elementsKey] = [];
      }
      currentElement$1[options.elementsKey].push(element);
    }
    element[options.parentKey] = currentElement$1; // will be deleted in onEndElement() if !options.addParent
    currentElement$1 = element;
  }

  function onText(text) {
    if (options.ignoreText) {
      return;
    }
    if (!text.trim() && !options.captureSpacesBetweenElements) {
      return;
    }
    if (options.trim) {
      text = text.trim();
    }
    if (options.nativeType) {
      text = nativeType(text);
    }
    if (options.sanitize) {
      text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    addField('text', text);
  }

  function onComment(comment) {
    if (options.ignoreComment) {
      return;
    }
    if (options.trim) {
      comment = comment.trim();
    }
    addField('comment', comment);
  }

  function onEndElement(name) {
    var parentElement = currentElement$1[options.parentKey];
    if (!options.addParent) {
      delete currentElement$1[options.parentKey];
    }
    currentElement$1 = parentElement;
  }

  function onCdata(cdata) {
    if (options.ignoreCdata) {
      return;
    }
    if (options.trim) {
      cdata = cdata.trim();
    }
    addField('cdata', cdata);
  }

  function onDoctype(doctype) {
    if (options.ignoreDoctype) {
      return;
    }
    doctype = doctype.replace(/^ /, '');
    if (options.trim) {
      doctype = doctype.trim();
    }
    addField('doctype', doctype);
  }

  function onError$1(error) {
    error.note = error; //console.error(error);
  }

  var xml2js$2 = function (xml, userOptions) {

    var parser = sax.parser(true, {}) ;
    var result = {};
    currentElement$1 = result;

    options = validateOptions$2(userOptions);

    {
      parser.opt = {strictEntities: true};
      parser.onopentag = onStartElement;
      parser.ontext = onText;
      parser.oncomment = onComment;
      parser.onclosetag = onEndElement;
      parser.onerror = onError$1;
      parser.oncdata = onCdata;
      parser.ondoctype = onDoctype;
      parser.onprocessinginstruction = onInstruction;
    }

    {
      parser.write(xml).close();
    }

    if (result[options.elementsKey]) {
      var temp = result[options.elementsKey];
      delete result[options.elementsKey];
      result[options.elementsKey] = temp;
      delete result.text;
    }

    return result;

  };

  var helper$1 = optionsHelper;
  var xml2js$1 = xml2js$2;

  function validateOptions$1 (userOptions) {
    var options = helper$1.copyOptions(userOptions);
    helper$1.ensureSpacesExists(options);
    return options;
  }

  var xml2json$1 = function(xml, userOptions) {
    var options, js, json, parentKey;
    options = validateOptions$1(userOptions);
    js = xml2js$1(xml, options);
    parentKey = 'compact' in options && options.compact ? '_parent' : 'parent';
    // parentKey = ptions.compact ? '_parent' : 'parent'; // consider this
    if ('addParent' in options && options.addParent) {
      json = JSON.stringify(js, function (k, v) { return k === parentKey? '_' : v; }, options.spaces);
    } else {
      json = JSON.stringify(js, null, options.spaces);
    }
    return json.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  };

  var helper = optionsHelper;
  var isArray = arrayHelper.isArray;

  var currentElement, currentElementName;

  function validateOptions(userOptions) {
    var options = helper.copyOptions(userOptions);
    helper.ensureFlagExists('ignoreDeclaration', options);
    helper.ensureFlagExists('ignoreInstruction', options);
    helper.ensureFlagExists('ignoreAttributes', options);
    helper.ensureFlagExists('ignoreText', options);
    helper.ensureFlagExists('ignoreComment', options);
    helper.ensureFlagExists('ignoreCdata', options);
    helper.ensureFlagExists('ignoreDoctype', options);
    helper.ensureFlagExists('compact', options);
    helper.ensureFlagExists('indentText', options);
    helper.ensureFlagExists('indentCdata', options);
    helper.ensureFlagExists('indentAttributes', options);
    helper.ensureFlagExists('indentInstruction', options);
    helper.ensureFlagExists('fullTagEmptyElement', options);
    helper.ensureFlagExists('noQuotesForNativeAttributes', options);
    helper.ensureSpacesExists(options);
    if (typeof options.spaces === 'number') {
      options.spaces = Array(options.spaces + 1).join(' ');
    }
    helper.ensureKeyExists('declaration', options);
    helper.ensureKeyExists('instruction', options);
    helper.ensureKeyExists('attributes', options);
    helper.ensureKeyExists('text', options);
    helper.ensureKeyExists('comment', options);
    helper.ensureKeyExists('cdata', options);
    helper.ensureKeyExists('doctype', options);
    helper.ensureKeyExists('type', options);
    helper.ensureKeyExists('name', options);
    helper.ensureKeyExists('elements', options);
    return options;
  }

  function writeIndentation(options, depth, firstLine) {
    return (!firstLine && options.spaces ? '\n' : '') + Array(depth + 1).join(options.spaces);
  }

  function writeAttributes(attributes, options, depth) {
    if (options.ignoreAttributes) {
      return '';
    }
    if ('attributesFn' in options) {
      attributes = options.attributesFn(attributes, currentElementName, currentElement);
    }
    var key, attr, attrName, quote, result = [];
    for (key in attributes) {
      if (attributes.hasOwnProperty(key) && attributes[key] !== null && attributes[key] !== undefined) {
        quote = options.noQuotesForNativeAttributes && typeof attributes[key] !== 'string' ? '' : '"';
        attr = '' + attributes[key]; // ensure number and boolean are converted to String
        attr = attr.replace(/"/g, '&quot;');
        attrName = 'attributeNameFn' in options ? options.attributeNameFn(key, attr, currentElementName, currentElement) : key;
        result.push((options.spaces && options.indentAttributes? writeIndentation(options, depth+1, false) : ' '));
        result.push(attrName + '=' + quote + ('attributeValueFn' in options ? options.attributeValueFn(attr, key, currentElementName, currentElement) : attr) + quote);
      }
    }
    if (attributes && Object.keys(attributes).length && options.spaces && options.indentAttributes) {
      result.push(writeIndentation(options, depth, false));
    }
    return result.join('');
  }

  function writeDeclaration(declaration, options, depth) {
    currentElement = declaration;
    currentElementName = 'xml';
    return options.ignoreDeclaration ? '' :  '<?' + 'xml' + writeAttributes(declaration[options.attributesKey], options, depth) + '?>';
  }

  function writeInstruction(instruction, options, depth) {
    if (options.ignoreInstruction) {
      return '';
    }
    var key;
    for (key in instruction) {
      if (instruction.hasOwnProperty(key)) {
        break;
      }
    }
    var instructionName = 'instructionNameFn' in options ? options.instructionNameFn(key, instruction[key], currentElementName, currentElement) : key;
    if (typeof instruction[key] === 'object') {
      currentElement = instruction;
      currentElementName = instructionName;
      return '<?' + instructionName + writeAttributes(instruction[key][options.attributesKey], options, depth) + '?>';
    } else {
      var instructionValue = instruction[key] ? instruction[key] : '';
      if ('instructionFn' in options) instructionValue = options.instructionFn(instructionValue, key, currentElementName, currentElement);
      return '<?' + instructionName + (instructionValue ? ' ' + instructionValue : '') + '?>';
    }
  }

  function writeComment(comment, options) {
    return options.ignoreComment ? '' : '<!--' + ('commentFn' in options ? options.commentFn(comment, currentElementName, currentElement) : comment) + '-->';
  }

  function writeCdata(cdata, options) {
    return options.ignoreCdata ? '' : '<![CDATA[' + ('cdataFn' in options ? options.cdataFn(cdata, currentElementName, currentElement) : cdata.replace(']]>', ']]]]><![CDATA[>')) + ']]>';
  }

  function writeDoctype(doctype, options) {
    return options.ignoreDoctype ? '' : '<!DOCTYPE ' + ('doctypeFn' in options ? options.doctypeFn(doctype, currentElementName, currentElement) : doctype) + '>';
  }

  function writeText(text, options) {
    if (options.ignoreText) return '';
    text = '' + text; // ensure Number and Boolean are converted to String
    text = text.replace(/&amp;/g, '&'); // desanitize to avoid double sanitization
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return 'textFn' in options ? options.textFn(text, currentElementName, currentElement) : text;
  }

  function hasContent(element, options) {
    var i;
    if (element.elements && element.elements.length) {
      for (i = 0; i < element.elements.length; ++i) {
        switch (element.elements[i][options.typeKey]) {
        case 'text':
          if (options.indentText) {
            return true;
          }
          break; // skip to next key
        case 'cdata':
          if (options.indentCdata) {
            return true;
          }
          break; // skip to next key
        case 'instruction':
          if (options.indentInstruction) {
            return true;
          }
          break; // skip to next key
        case 'doctype':
        case 'comment':
        case 'element':
          return true;
        default:
          return true;
        }
      }
    }
    return false;
  }

  function writeElement(element, options, depth) {
    currentElement = element;
    currentElementName = element.name;
    var xml = [], elementName = 'elementNameFn' in options ? options.elementNameFn(element.name, element) : element.name;
    xml.push('<' + elementName);
    if (element[options.attributesKey]) {
      xml.push(writeAttributes(element[options.attributesKey], options, depth));
    }
    var withClosingTag = element[options.elementsKey] && element[options.elementsKey].length || element[options.attributesKey] && element[options.attributesKey]['xml:space'] === 'preserve';
    if (!withClosingTag) {
      if ('fullTagEmptyElementFn' in options) {
        withClosingTag = options.fullTagEmptyElementFn(element.name, element);
      } else {
        withClosingTag = options.fullTagEmptyElement;
      }
    }
    if (withClosingTag) {
      xml.push('>');
      if (element[options.elementsKey] && element[options.elementsKey].length) {
        xml.push(writeElements(element[options.elementsKey], options, depth + 1));
        currentElement = element;
        currentElementName = element.name;
      }
      xml.push(options.spaces && hasContent(element, options) ? '\n' + Array(depth + 1).join(options.spaces) : '');
      xml.push('</' + elementName + '>');
    } else {
      xml.push('/>');
    }
    return xml.join('');
  }

  function writeElements(elements, options, depth, firstLine) {
    return elements.reduce(function (xml, element) {
      var indent = writeIndentation(options, depth, firstLine && !xml);
      switch (element.type) {
      case 'element': return xml + indent + writeElement(element, options, depth);
      case 'comment': return xml + indent + writeComment(element[options.commentKey], options);
      case 'doctype': return xml + indent + writeDoctype(element[options.doctypeKey], options);
      case 'cdata': return xml + (options.indentCdata ? indent : '') + writeCdata(element[options.cdataKey], options);
      case 'text': return xml + (options.indentText ? indent : '') + writeText(element[options.textKey], options);
      case 'instruction':
        var instruction = {};
        instruction[element[options.nameKey]] = element[options.attributesKey] ? element : element[options.instructionKey];
        return xml + (options.indentInstruction ? indent : '') + writeInstruction(instruction, options, depth);
      }
    }, '');
  }

  function hasContentCompact(element, options, anyContent) {
    var key;
    for (key in element) {
      if (element.hasOwnProperty(key)) {
        switch (key) {
        case options.parentKey:
        case options.attributesKey:
          break; // skip to next key
        case options.textKey:
          if (options.indentText || anyContent) {
            return true;
          }
          break; // skip to next key
        case options.cdataKey:
          if (options.indentCdata || anyContent) {
            return true;
          }
          break; // skip to next key
        case options.instructionKey:
          if (options.indentInstruction || anyContent) {
            return true;
          }
          break; // skip to next key
        case options.doctypeKey:
        case options.commentKey:
          return true;
        default:
          return true;
        }
      }
    }
    return false;
  }

  function writeElementCompact(element, name, options, depth, indent) {
    currentElement = element;
    currentElementName = name;
    var elementName = 'elementNameFn' in options ? options.elementNameFn(name, element) : name;
    if (typeof element === 'undefined' || element === null || element === '') {
      return 'fullTagEmptyElementFn' in options && options.fullTagEmptyElementFn(name, element) || options.fullTagEmptyElement ? '<' + elementName + '></' + elementName + '>' : '<' + elementName + '/>';
    }
    var xml = [];
    if (name) {
      xml.push('<' + elementName);
      if (typeof element !== 'object') {
        xml.push('>' + writeText(element,options) + '</' + elementName + '>');
        return xml.join('');
      }
      if (element[options.attributesKey]) {
        xml.push(writeAttributes(element[options.attributesKey], options, depth));
      }
      var withClosingTag = hasContentCompact(element, options, true) || element[options.attributesKey] && element[options.attributesKey]['xml:space'] === 'preserve';
      if (!withClosingTag) {
        if ('fullTagEmptyElementFn' in options) {
          withClosingTag = options.fullTagEmptyElementFn(name, element);
        } else {
          withClosingTag = options.fullTagEmptyElement;
        }
      }
      if (withClosingTag) {
        xml.push('>');
      } else {
        xml.push('/>');
        return xml.join('');
      }
    }
    xml.push(writeElementsCompact(element, options, depth + 1, false));
    currentElement = element;
    currentElementName = name;
    if (name) {
      xml.push((indent ? writeIndentation(options, depth, false) : '') + '</' + elementName + '>');
    }
    return xml.join('');
  }

  function writeElementsCompact(element, options, depth, firstLine) {
    var i, key, nodes, xml = [];
    for (key in element) {
      if (element.hasOwnProperty(key)) {
        nodes = isArray(element[key]) ? element[key] : [element[key]];
        for (i = 0; i < nodes.length; ++i) {
          switch (key) {
          case options.declarationKey: xml.push(writeDeclaration(nodes[i], options, depth)); break;
          case options.instructionKey: xml.push((options.indentInstruction ? writeIndentation(options, depth, firstLine) : '') + writeInstruction(nodes[i], options, depth)); break;
          case options.attributesKey: case options.parentKey: break; // skip
          case options.textKey: xml.push((options.indentText ? writeIndentation(options, depth, firstLine) : '') + writeText(nodes[i], options)); break;
          case options.cdataKey: xml.push((options.indentCdata ? writeIndentation(options, depth, firstLine) : '') + writeCdata(nodes[i], options)); break;
          case options.doctypeKey: xml.push(writeIndentation(options, depth, firstLine) + writeDoctype(nodes[i], options)); break;
          case options.commentKey: xml.push(writeIndentation(options, depth, firstLine) + writeComment(nodes[i], options)); break;
          default: xml.push(writeIndentation(options, depth, firstLine) + writeElementCompact(nodes[i], key, options, depth, hasContentCompact(nodes[i], options)));
          }
          firstLine = firstLine && !xml.length;
        }
      }
    }
    return xml.join('');
  }

  var js2xml$2 = function (js, options) {
    options = validateOptions(options);
    var xml = [];
    currentElement = js;
    currentElementName = '_root_';
    if (options.compact) {
      xml.push(writeElementsCompact(js, options, 0, true));
    } else {
      if (js[options.declarationKey]) {
        xml.push(writeDeclaration(js[options.declarationKey], options, 0));
      }
      if (js[options.elementsKey] && js[options.elementsKey].length) {
        xml.push(writeElements(js[options.elementsKey], options, 0, !xml.length));
      }
    }
    return xml.join('');
  };

  var js2xml$1 = js2xml$2;

  var json2xml$1 = function (json, options) {
    if (json instanceof Buffer) {
      json = json.toString();
    }
    var js = null;
    if (typeof (json) === 'string') {
      try {
        js = JSON.parse(json);
      } catch (e) {
        throw new Error('The JSON structure is invalid');
      }
    } else {
      js = json;
    }
    return js2xml$1(js, options);
  };

  /*jslint node:true */

  var xml2js = xml2js$2;
  var xml2json = xml2json$1;
  var js2xml = js2xml$2;
  var json2xml = json2xml$1;

  var lib = {
    xml2js: xml2js,
    xml2json: xml2json,
    js2xml: js2xml,
    json2xml: json2xml
  };

  /* eslint-disable object-property-newline */

  const drivers = { raster: {}, vector: {} };

  function xmlToJs(data) {
      if (data) {
          const tempJs = lib.xml2js(data);
          if (tempJs.elements && tempJs.elements.length > 0) {
              if (tempJs.elements.length !== 1) console.warn('invalid xml!');
              if (tempJs.elements[0] && tempJs.elements[0].elements) {
                  return tempJs.elements[0].elements.map((o) => {
                      const temp = o.attributes;
                      if (o.elements && o.elements.length > 0) {
                          temp.options = o.elements.map((o2) => o2.elements[0].text);
                      }
                      return temp;
                  });
              }
          }
      }
      return null;
  }

  function getDriverData(driverPtr) {
      const extensions = GDALFunctions.GDALGetMetadataItem(driverPtr, 'DMD_EXTENSIONS', null);
      let extension = GDALFunctions.GDALGetMetadataItem(driverPtr, 'DMD_EXTENSION', null);
      if (extension === '' && extensions !== '') {
          extension = extensions.split(' ')[0];
      }
      if (extension !== '') {
          extension = extension.replace('.', '').replace('/', '');
      }
      const shortName = GDALFunctions.GDALGetDescription(driverPtr);
      if (shortName === 'GeoJSON') extension = 'geojson';
      const longName = GDALFunctions.GDALGetMetadataItem(driverPtr, 'DMD_LONGNAME', null);
      const isReadable = GDALFunctions.GDALGetMetadataItem(driverPtr, 'DCAP_OPEN', null) === 'YES';
      const isWritable = GDALFunctions.GDALGetMetadataItem(driverPtr, 'DCAP_CREATE', null) === 'YES'
                      || GDALFunctions.GDALGetMetadataItem(driverPtr, 'DCAP_CREATECOPY', null) === 'YES';
      const isRaster = GDALFunctions.GDALGetMetadataItem(driverPtr, 'DCAP_RASTER', null) === 'YES';
      const isVector = GDALFunctions.GDALGetMetadataItem(driverPtr, 'DCAP_VECTOR', null) === 'YES';

      const openOptionsList = xmlToJs(GDALFunctions.GDALGetMetadataItem(driverPtr, 'DMD_OPENOPTIONLIST', null));
      const creationOptionList = xmlToJs(GDALFunctions.GDALGetMetadataItem(driverPtr, 'DMD_CREATIONOPTIONLIST', null));
      const layerCreationOptionList = xmlToJs(GDALFunctions.GDALGetMetadataItem(driverPtr, 'DS_LAYER_CREATIONOPTIONLIST', null));
      const helpUrl = GDALFunctions.GDALGetMetadataItem(driverPtr, 'DMD_HELPTOPIC', null);

      // eslint-disable-next-line object-curly-newline
      return {
          extension, extensions, shortName, longName,
          isReadable, isWritable, isRaster, isVector,
          openOptionsList, creationOptionList, layerCreationOptionList, helpUrl,
      };
  }

  function setDrivers() {
      const driverCount = GDALFunctions.GDALGetDriverCount();
      for (let i = 0; i < driverCount; i += 1) {
          const driverPtr = GDALFunctions.GDALGetDriver(i);
          const info = getDriverData(driverPtr);
          if (info.isRaster) drivers.raster[info.shortName] = { index: i, ...info, type: 'raster' };
          if (info.isVector) drivers.vector[info.shortName] = { index: i, ...info, type: 'vector' };
      }
  }

  /* eslint-disable no-underscore-dangle */

  /**
      * ogr2ogr function can be used to convert simple features data between file formats.
      * It can also perform various operations during the process,
      * such as spatial or attribute selection, reducing the set of attributes,
      * setting the output coordinate system or even reprojecting the features during translation.
      *
      * {@link https://gdal.org/programs/ogr2ogr.html}
      *
      * @module a/ogr2ogr
      * @async
      * @param {TypeDefs.Dataset} dataset Dataset to be converted.
      * @param {Array} options Options ({@link https://gdal.org/programs/ogr2ogr.html#description})
      * @return {Promise<TypeDefs.FilePath>} "Promise" returns paths of created files.
      * @example
      * const Gdal = await initGdalJs();
      * const dataset = (await Gdal.open('data.mbtiles')).datasets[0];
      * const options = [
      *   '-f', 'GeoJSON',
      *   '-t_srs', 'EPSG:4326'
      * ];
      * const filePath = await Gdal.ogr2ogr(dataset, options);
      *
  */
  function ogr2ogr(dataset, options = []) {
      return new Promise((resolve, reject) => {
          const optStr = getOptions(options);
          const config = optStr.config;
          Object.entries(config).forEach(([key, value]) => {
              GDALFunctions.CPLSetConfigOption(key, value);
          });
          const translateOptionsPtr = GDALFunctions.GDALVectorTranslateOptionsNew(optStr.ptr, null);

          const datasetList = GDALFunctions.Module._malloc(4);
          GDALFunctions.Module.setValue(datasetList, dataset.pointer, '*');

          const driverIndex = options.indexOf('-f') + 1;
          let ext = 'unknown';
          if (driverIndex !== 0) {
              const driverName = options[driverIndex];
              const driver = drivers.vector[driverName];
              if (driver) {
                  if (driverName === 'MapInfo File' && options.indexOf('FORMAT=MIF') !== -1) ext = 'mif';
                  else ext = driver.extension;
              }
          }

          const outputName = dataset.path.split('.', 1)[0];
          const filePath = `${OUTPUTPATH}/${outputName}.${ext}`;
          const datasetPtr = GDALFunctions.GDALVectorTranslate(filePath, null, 1, datasetList, translateOptionsPtr, null);
          GDALFunctions.GDALVectorTranslateOptionsFree(translateOptionsPtr);
          clearOptions(optStr);
          GDALFunctions.GDALClose(datasetPtr);

          if (GDALFunctions.CPLGetLastErrorNo() !== 0) {
              const error = getGdalError();
              reject(error);
          } else {
              resolve({
                  local: filePath,
                  real: `${getRealOutputPath()}/${outputName}.${ext}`,
              });
          }
      });
  }

  /* eslint-disable camelcase */

  /**
      * gdal_translate function can be used to convert raster data between different formats,
      * potentially performing some operations like subsettings, resampling,
      * and rescaling pixels in the process.
      *
      * {@link https://gdal.org/programs/gdal_translate.html}
      *
      * @module a/gdal_translate
      * @async
      * @param {TypeDefs.Dataset} dataset Dataset to be converted.
      * @param {Array} options Options ({@link https://gdal.org/programs/gdal_translate.html#description})
      * @return {Promise<TypeDefs.FilePath>} "Promise" returns paths of created files.
      * @example
      * const Gdal = await initGdalJs();
      * const dataset = (await Gdal.open('data.tif')).datasets[0];
      * const options = [
      *   '-of', 'PNG'
      * ];
      * const filePath = await Gdal.gdal_translate(dataset, options);
      *
  */
  function gdal_translate(dataset, options = []) {
      return new Promise((resolve, reject) => {
          const optStr = getOptions(options);
          const config = optStr.config;
          Object.entries(config).forEach(([key, value]) => {
              GDALFunctions.CPLSetConfigOption(key, value);
          });
          const translateOptionsPtr = GDALFunctions.GDALTranslateOptionsNew(optStr.ptr, null);

          const driverIndex = options.indexOf('-of') + 1;
          let ext = 'unknown';
          if (driverIndex !== 0) {
              const driverName = options[driverIndex];
              const driver = drivers.raster[driverName];
              if (driver) ext = driver.extension;
          }

          const outputName = dataset.path.split('.', 1)[0];
          const filePath = `${OUTPUTPATH}/${outputName}.${ext}`;
          const datasetPtr = GDALFunctions.GDALTranslate(filePath, dataset.pointer, translateOptionsPtr, null);
          GDALFunctions.GDALTranslateOptionsFree(translateOptionsPtr);
          clearOptions(optStr);
          GDALFunctions.GDALClose(datasetPtr);

          if (GDALFunctions.CPLGetLastErrorNo() !== 0) {
              const error = getGdalError();
              reject(error);
          } else {
              resolve({
                  local: filePath,
                  real: `${getRealOutputPath()}/${outputName}.${ext}`,
              });
          }
      });
  }

  /* eslint-disable camelcase */

  /**
      * gdal_rasterize function burns vector geometries (points, lines, and polygons)
      * into the raster band(s) of a raster image. Vectors are read from OGR supported vector formats.
      *
      * {@link https://gdal.org/programs/gdal_rasterize.html}
      *
      * @module a/gdal_rasterize
      * @async
      * @param {TypeDefs.Dataset} dataset Dataset to be converted.
      * @param {Array} options Options ({@link https://gdal.org/programs/gdal_rasterize.html#description})
      * @return {Promise<TypeDefs.FilePath>} "Promise" returns paths of created files.
      * @example
      * const Gdal = await initGdalJs();
      * const dataset = (await Gdal.open('data.geojson')).datasets[0];
      * const options = [
      *   '-of', 'GTiff',
      *   '-co', 'alpha=yes'
      * ];
      * const filePath = await Gdal.gdal_rasterize(dataset, options);
      *
  */
  function gdal_rasterize(dataset, options = []) {
      return new Promise((resolve, reject) => {
          const optStr = getOptions(options);
          const config = optStr.config;
          Object.entries(config).forEach(([key, value]) => {
              GDALFunctions.CPLSetConfigOption(key, value);
          });
          const optionsPtr = GDALFunctions.GDALRasterizeOptionsNew(optStr.ptr, null);

          const driverIndex = options.indexOf('-of') + 1;
          let ext = 'tif';
          if (driverIndex !== 0) {
              const driverName = options[driverIndex];
              const driver = drivers.raster[driverName];
              if (driver) ext = driver.extension;
          }

          const outputName = dataset.path.split('.', 1)[0];
          const filePath = `${OUTPUTPATH}/${outputName}.${ext}`;
          const datasetPtr = GDALFunctions.GDALRasterize(filePath, null, dataset.pointer, optionsPtr, null);
          GDALFunctions.GDALRasterizeOptionsFree(optionsPtr);
          clearOptions(optStr);
          GDALFunctions.GDALClose(datasetPtr);

          if (GDALFunctions.CPLGetLastErrorNo() !== 0) {
              const error = getGdalError();
              reject(error);
          } else {
              resolve({
                  local: filePath,
                  real: `${getRealOutputPath()}/${outputName}.${ext}`,
              });
          }
      });
  }

  /* eslint-disable no-underscore-dangle */

  /**
      * gdalwarp function is an image mosaicing, reprojection and warping utility.
      * The function can reproject to any supported projection,
      * and can also apply GCPs stored with the image if the image is “raw” with control information.
      *
      * {@link https://gdal.org/programs/gdalwarp.html}
      *
      * @module a/gdalwarp
      * @async
      * @param {TypeDefs.Dataset} dataset Dataset to be converted.
      * @param {Array} options Options ({@link https://gdal.org/programs/gdalwarp.html#description})
      * @return {Promise<TypeDefs.FilePath>} "Promise" returns paths of created files.
      * @example
      * const Gdal = await initGdalJs();
      * const dataset = (await Gdal.open('data.tif')).datasets[0];
      * const options = [
      *   '-of', 'GTiff',
      *   '-t_srs', 'EPSG:4326'
      * ];
      * const filePath = await Gdal.gdalwarp(dataset, options);
      *
  */
  function gdalwarp(dataset, options = []) {
      return new Promise((resolve, reject) => {
          const optStr = getOptions(options);
          const config = optStr.config;
          Object.entries(config).forEach(([key, value]) => {
              GDALFunctions.CPLSetConfigOption(key, value);
          });
          const translateOptionsPtr = GDALFunctions.GDALWarpAppOptionsNew(optStr.ptr, null);

          const datasetList = GDALFunctions.Module._malloc(4); // Uint32 pointer
          GDALFunctions.Module.setValue(datasetList, dataset.pointer, '*');

          const driverIndex = options.indexOf('-of') + 1;
          let ext = 'unknown';
          if (driverIndex !== 0) {
              const driverName = options[driverIndex];
              const driver = drivers.raster[driverName];
              if (driver) ext = driver.extension;
          }

          const outputName = dataset.path.split('.', 1)[0];
          const filePath = `${OUTPUTPATH}/${outputName}.${ext}`;
          const datasetPtr = GDALFunctions.GDALWarp(filePath, null, 1, datasetList, translateOptionsPtr, null);
          GDALFunctions.GDALWarpAppOptionsFree(translateOptionsPtr);
          clearOptions(optStr);
          GDALFunctions.GDALClose(datasetPtr);

          if (GDALFunctions.CPLGetLastErrorNo() !== 0) {
              const error = getGdalError();
              reject(error);
          } else {
              resolve({
                  local: filePath,
                  real: `${getRealOutputPath()}/${outputName}.${ext}`,
              });
          }
      });
  }

  /* eslint-disable function-paren-newline */

  /**
      * The gdaltransform utility reprojects a list of coordinates into any supported projection.
      *
      * {@link https://gdal.org/programs/gdaltransform.html}
      *
      * @module a/gdaltransform
      * @async
      * @param {Array<Array<number>>} coords Coordinates to be converted. Example: [[27.143757, 38.4247972, 0]]
      * @param {Array} options Options ({@link https://gdal.org/programs/gdaltransform.html#description}) (-gcp is not supported.)
      * @return {Promise<Array<Array<number>>>} "Promise" returns converted coordinates.
      * @example
      * const coords = [
      *     [27.143757, 38.4247972],
      * ];
      * const options = [
      *     '-s_srs', 'EPSG:4326',
      *     '-t_srs', 'EPSG:3857',
      *     '-output_xy',
      * ];
      * const newCoords = await Gdal.gdaltransform(coords, options);
      * console.log(newCoords); // [ [ 3021629.2074563554, 4639610.441991095 ] ]
  */
  function gdaltransform(coords, options) {
      return new Promise((resolve) => {
          const xCoords = new Float64Array(coords.map((c) => c[0]));
          const yCoords = new Float64Array(coords.map((c) => c[1]));
          const zCoords = new Float64Array(coords.map((c) => c[2] || 0));
          const xCoordOffset = GDALFunctions.Module._malloc(xCoords.length * xCoords.BYTES_PER_ELEMENT);
          const yCoordOffset = GDALFunctions.Module._malloc(yCoords.length * yCoords.BYTES_PER_ELEMENT);
          const zCoordOffset = GDALFunctions.Module._malloc(zCoords.length * zCoords.BYTES_PER_ELEMENT);
          GDALFunctions.Module.HEAPF64.set(xCoords, xCoordOffset / xCoords.BYTES_PER_ELEMENT);
          GDALFunctions.Module.HEAPF64.set(yCoords, yCoordOffset / yCoords.BYTES_PER_ELEMENT);
          GDALFunctions.Module.HEAPF64.set(zCoords, zCoordOffset / zCoords.BYTES_PER_ELEMENT);

          let bInverse = false;
          let bOutputXY = false;

          const options2 = [];
          for (let i = 0; i < options.length; i += 1) {
              switch (options[i]) {
                  case '-s_srs':
                      i += 1;
                      options2.push(`SRC_SRS=${options[i]}`);
                      break;
                  case '-t_srs':
                      i += 1;
                      options2.push(`DST_SRS=${options[i]}`);
                      break;
                  case '-ct':
                      i += 1;
                      options2.push(`COORDINATE_OPERATION=${options[i]}`);
                      break;
                  case '-order':
                      i += 1;
                      options2.push(`MAX_GCP_ORDER=${options[i]}`);
                      break;
                  case '-tps':
                      options2.push('METHOD=GCP_TPS');
                      break;
                  case '-rpc':
                      options2.push('METHOD=RPC');
                      break;
                  case '-geoloc':
                      options2.push('METHOD=GEOLOC_ARRAY');
                      break;
                  case '-i':
                      bInverse = true;
                      break;
                  case '-to':
                      i += 1;
                      options2.push(`${options[i]}`);
                      break;
                  case '-output_xy':
                      bOutputXY = true;
                      break;
              }
          }

          const optStr = getOptions(options2);

          const hTransformArg = GDALFunctions.GDALCreateGenImgProjTransformer2(null, null, optStr.ptr);
          GDALFunctions.GDALGenImgProjTransform(
              hTransformArg, bInverse, coords.length, xCoordOffset, yCoordOffset, zCoordOffset, null,
          );

          const convertedCoords = [
              Array.from(GDALFunctions.Module.HEAPF64.subarray(
                  xCoordOffset / xCoords.BYTES_PER_ELEMENT,
                  (xCoordOffset / xCoords.BYTES_PER_ELEMENT) + xCoords.length,
              )),
              Array.from(GDALFunctions.Module.HEAPF64.subarray(
                  yCoordOffset / yCoords.BYTES_PER_ELEMENT,
                  (yCoordOffset / yCoords.BYTES_PER_ELEMENT) + yCoords.length,
              )),
              Array.from(GDALFunctions.Module.HEAPF64.subarray(
                  zCoordOffset / zCoords.BYTES_PER_ELEMENT,
                  (zCoordOffset / zCoords.BYTES_PER_ELEMENT) + zCoords.length,
              )),
          ];

          const result = [];
          for (let i = 0; i < convertedCoords[0].length; i += 1) {
              if (bOutputXY) result.push([convertedCoords[0][i], convertedCoords[1][i]]);
              else result.push([convertedCoords[0][i], convertedCoords[1][i], convertedCoords[2][i]]);
          }
          GDALFunctions.Module._free(xCoordOffset);
          GDALFunctions.Module._free(yCoordOffset);
          GDALFunctions.Module._free(zCoordOffset);
          clearOptions(optStr);
          GDALFunctions.GDALDestroyGenImgProjTransformer(hTransformArg);

          resolve(result);
      });
  }

  let lastInputMountedPath;

  function unmount() {
      if (isNode || typeof importScripts === 'function') {
          GDALFunctions.Module.FS.unmount(INPUTPATH);
      }
  }

  function mountDest(path) {
      if (isNode) {
          GDALFunctions.Module.FS.mount(GDALFunctions.Module.NODEFS, { root: path }, OUTPUTPATH);
      }
  }

  function mount(files) {
      return new Promise((resolve) => {
          if (files.length === 0) {
              resolve([]);
          } else if (isNode) {
              const output = [];
              files.forEach((file) => {
                  const temp = file.split('/');
                  const name = temp.pop();
                  const path = temp.join('/') || '.';

                  if (lastInputMountedPath !== path) {
                      if (lastInputMountedPath) unmount();

                      lastInputMountedPath = path;
                      GDALFunctions.Module.FS.mount(GDALFunctions.Module.NODEFS, { root: path }, INPUTPATH);
                  }
                  output.push({ name });
              });

              resolve(output);
          } else if (typeof importScripts === 'function') {
              if (lastInputMountedPath) unmount();
              GDALFunctions.Module.FS.mount(GDALFunctions.Module.WORKERFS, { files }, INPUTPATH);
              lastInputMountedPath = true;
              resolve(files);
          } else {
              const promises = [];
              files.forEach((file) => {
                  promises.push(file.arrayBuffer());
              });
              Promise.all(promises).then((buffers) => {
                  buffers.forEach((buffer, i) => {
                      const ss = new Uint8Array(buffer);
                      GDALFunctions.Module.FS.writeFile(`${INPUTPATH}/${files[i].name}`, ss);
                  });
                  resolve(files);
              });
          }
      });
  }

  /* eslint-disable no-continue */

  /**
      * Opens files selected with HTML input element.
      *
      * @module f/open
      * @async
      * @param {FileList|File|Array<string>|string} files Returned by the files property of the HTML input element.
      * @param {Array<string>} openOptions Open options passed to candidate drivers.
      * @return {Promise<TypeDefs.DatasetList>} "Promise" returns dataset list and error list.
      * @example
      * // Opening file from file input.
      * // HTML
      * <input class="input-file" type="file" name="file" id="file" onChange="onFileChange" />
      * // JS
      * function onFileChange({ target }) {
      *   const result = await Gdal.open(target.file);
      * }
      * @example
      * // Opening files from file input. (multiple)
      * // HTML
      * <input class="input-file" type="file" name="files[]" id="file" onChange="onFileChange" multiple />
      * // JS
      * function onFileChange({ target }) {
      *   const result = await Gdal.open(target.files);
      * }
      * @example
      * // Opening a file from the network.
      * const fileData = await fetch('test/polygon.geojson');
      * const file = new File([await fileData.blob()], "polygon.geojson");
      * const result = await Gdal.open(file);
      * @example
      * // Opening a file from filesystem on Node.js.
      * const result = await Gdal.open('test/polygon.geojson');
      * @example
      * // Opening a file from filesystem on Node.js with open options.
      * const result = await Gdal.open('test/points.csv', ['X_POSSIBLE_NAMES=lng', 'Y_POSSIBLE_NAMES=lat']);
      * @example
      * // Opening files from filesystem on Node.js.
      * const result = await Gdal.open(['test/polygon.geojson', 'test/line.geojson']);
      * @example
      * // Opening files from virtual gdal3.js path.
      * // * Opened files are saved in the /input/... virtual path.
      * // * Converted files are saved in the /output/... virtual path.
      * const result = await Gdal.open('/output/polygon.geojson');
      * const result2 = await Gdal.open('/input/polygon.geojson');
      *
  */
  function open(fileOrFiles, openOptions = []) {
      let files = fileOrFiles;
      const optStr = getOptions(openOptions);
      if (!(Array.isArray(files) || (typeof FileList === 'function' && files instanceof FileList))) {
          files = [files];
      }

      return new Promise((resolve, reject) => {
          const internalFiles = [];
          const externalFiles = [];
          [...files].forEach((file) => {
              if ((typeof file === 'string' || file instanceof String) && (
                  file.substr(0, INPUTPATH.length + 1) === `${INPUTPATH}/` || file.substr(0, OUTPUTPATH.length + 1) === `${OUTPUTPATH}/`
              )) {
                  internalFiles.push({ name: file.substr(OUTPUTPATH.length + 1), internal: true });
              } else {
                  externalFiles.push(file);
              }
          });
          mount(externalFiles).then((mountedExternalFiles) => {
              const mountedFiles = [...mountedExternalFiles, ...internalFiles];
              const errors = [];
              GDALFunctions.CPLErrorReset();
              const inputResults = {};
              for (let i = 0; i < mountedFiles.length; i += 1) {
                  const path = mountedFiles[i].name;
                  const name = path.split('.', 1)[0];

                  if (!inputResults[name]) inputResults[name] = {};
                  if (inputResults[name].pointer) continue;
                  inputResults[name].path = path;

                  let fileFullPath = `${INPUTPATH}/${path}`;
                  if (mountedFiles[i].internal) fileFullPath = `${OUTPUTPATH}/${path}`;

                  const datasetPtr = GDALFunctions.GDALOpenEx(fileFullPath, null, null, optStr.ptr, null);
                  if (GDALFunctions.CPLGetLastErrorNo() !== 0 || datasetPtr === 0) {
                      const error = getGdalError();
                      errors.push(error);
                      delete inputResults[name];
                      continue;
                  }
                  inputResults[name].pointer = datasetPtr;
                  const bandCount = GDALFunctions.GDALGetRasterCount(datasetPtr);
                  const layerCount = GDALFunctions.GDALDatasetGetLayerCount(datasetPtr);
                  if (bandCount > 0 && layerCount === 0) {
                      inputResults[name].type = 'raster';
                  } else {
                      inputResults[name].type = 'vector';
                  }
              }

              clearOptions(optStr);

              const datasets = Object.values(inputResults);

              // unmount();

              if (datasets.length > 0 || errors.length === 0) {
                  resolve({ datasets, errors });
              } else {
                  reject(errors);
              }
          });
      });
  }

  /**
      * Close the dataset. The memory associated to the dataset will be freed.
      *
      * Datasets **must** be closed when you're finished with them, or the
      * memory consumption will grow forever.
      *
      * @module f/close
      * @async
      * @param {TypeDefs.Dataset} dataset Dataset to be closed.
      * @return {Promise<void>}
      * @example
      * Gdal.close(dataset);
  */
  function close(dataset) {
      return new Promise((resolve) => {
          GDALFunctions.GDALClose(dataset.pointer);
          resolve();
      });
  }

  /* eslint-disable no-underscore-dangle */

  /**
      * Lists information about a raster/vector dataset.
      *
      * @module f/getInfo
      * @async
      * @param {TypeDefs.Dataset} dataset Dataset
      * @return {Promise<TypeDefs.DatasetInfo>} "Promise" returns an object containing file information.
      * @example
      * const dataset = (await Gdal.open("...")).datasets[0];
      * const datasetInfo = await Gdal.getInfo(dataset);
      * console.log(datasetInfo);
      * @example
      * // Raster output
      * {
      *   "type": "raster",
      *   "bandCount": 1,
      *   "width": 514,
      *   "height": 515,
      *   "projectionWkt": "PROJCS[\"unnamed\",GEOGCS[\"NAD27\",DATUM[\"North_American_Datum_1927\",SPHEROID[\"Clarke 1866\",6378206.4,294.978698213898,AUTHORITY[\"EPSG\",\"7008\"]],AUTHORITY[\"EPSG\",\"6267\"]],PRIMEM[\"Greenwich\",0],UNIT[\"degree\",0.0174532925199433,AUTHORITY[\"EPSG\",\"9122\"]],AUTHORITY[\"EPSG\",\"4267\"]],PROJECTION[\"Cylindrical_Equal_Area\"],PARAMETER[\"standard_parallel_1\",33.75],PARAMETER[\"central_meridian\",-117.333333333333],PARAMETER[\"false_easting\",0],PARAMETER[\"false_northing\",0],UNIT[\"metre\",1,AUTHORITY[\"EPSG\",\"9001\"]],AXIS[\"Easting\",EAST],AXIS[\"Northing\",NORTH]]",
      *   "coordinateTransform": {
      *     "0": -28493.166784412522,
      *     "1": 60.02213698319374,
      *     "2": 0,
      *     "3": 4255884.5438021915,
      *     "4": 0,
      *     "5": -60.02213698319374
      *   },
      *   "corners": [
      *     [
      *       -28493.166784412522,
      *       4255884.5438021915
      *     ],
      *     [
      *       2358.211624949061,
      *       4255884.5438021915
      *     ],
      *     [
      *       2358.211624949061,
      *       4224973.143255847
      *     ],
      *     [
      *       -28493.166784412522,
      *       4224973.143255847
      *     ]
      *   ],
      *   "driverName": "GeoTIFF",
      *   "dsName": "/input/cea.tif"
      * }
      * @example
      * // Vector output
      * {
      *   "type": "vector",
      *   "layerCount": 1,
      *   "featureCount": 2,
      *   "layers": [
      *     {
      *       "name": "polygon",
      *       "featureCount": 2
      *     }
      *   ],
      *   "dsName": "/input/polygon.geojson",
      *   "driverName": "GeoJSON"
      * }
  */
  function getInfo(dataset) {
      return new Promise((resolve) => {
          const bandCount = GDALFunctions.GDALGetRasterCount(dataset.pointer);
          const layerCount = GDALFunctions.GDALDatasetGetLayerCount(dataset.pointer);
          if (bandCount > 0 && layerCount === 0) { // Raster
              const maxX = GDALFunctions.GDALGetRasterXSize(dataset.pointer);
              const maxY = GDALFunctions.GDALGetRasterYSize(dataset.pointer);
              const wktStr = GDALFunctions.GDALGetProjectionRef(dataset.pointer);
              const byteOffset = GDALFunctions.Module._malloc(6 * Float64Array.BYTES_PER_ELEMENT);
              GDALFunctions.GDALGetGeoTransform(dataset.pointer, byteOffset);
              const geoTransform = GDALFunctions.Module.HEAPF64.subarray(
                  byteOffset / Float64Array.BYTES_PER_ELEMENT,
                  (byteOffset / Float64Array.BYTES_PER_ELEMENT) + 6,
              );
              const corners = [
                  [0, 0],
                  [maxX, 0],
                  [maxX, maxY],
                  [0, maxY],
              ];
              const geoCorners = corners.map((coords) => {
                  const x = coords[0];
                  const y = coords[1];
                  return [
                      geoTransform[0] + (geoTransform[1] * x) + (geoTransform[2] * y),
                      geoTransform[3] + (geoTransform[4] * x) + (geoTransform[5] * y),
                  ];
              });
              const driverPtr = GDALFunctions.GDALGetDatasetDriver(dataset.pointer);
              const driverName = GDALFunctions.GDALGetDriverLongName(driverPtr);
              const dsName = GDALFunctions.OGR_DS_GetName(dataset.pointer);
              resolve(JSON.parse(JSON.stringify({
                  type: 'raster',
                  bandCount,
                  width: maxX,
                  height: maxY,
                  projectionWkt: wktStr,
                  coordinateTransform: geoTransform,
                  corners: geoCorners,
                  driverName,
                  dsName,
              })));
          } else { // Vector
              // const layerCount2 = GDALFunctions.OGR_DS_GetLayerCount(dataset.pointer);

              const layers = [];
              for (let i = 0; i < layerCount; i += 1) {
                  const layerPtr = GDALFunctions.OGR_DS_GetLayer(dataset.pointer, i);
                  const layerName = GDALFunctions.OGR_L_GetName(layerPtr);
                  const featureCount = GDALFunctions.OGR_L_GetFeatureCount(layerPtr, 1);
                  layers.push({
                      name: layerName,
                      featureCount,
                  });
              }
              const featureCount = layers.reduce((acc, layer) => acc + layer.featureCount, 0);

              const dsName = GDALFunctions.OGR_DS_GetName(dataset.pointer);
              const driverPtr = GDALFunctions.GDALGetDatasetDriver(dataset.pointer);
              const driverName = GDALFunctions.GDALGetDriverLongName(driverPtr);
              resolve({
                  type: 'vector',
                  layerCount,
                  featureCount,
                  layers,
                  dsName,
                  driverName,
              });
          }
      });
  }

  function getFileList(path = OUTPUTPATH.substr(1)) {
      const contents = path.split('/').reduce((accumulator, currentValue) => accumulator.contents[currentValue], GDALFunctions.Module.FS.root).contents;
      const fileList = [];
      Object.keys(contents).forEach((name) => {
          const obj = contents[name];
          if (obj.usedBytes) fileList.push({ path: `/${path}/${name}`, size: obj.usedBytes });
          else if (obj.contents) fileList.push(...getFileList(`${path}/${name}`));
      });
      return fileList;
  }

  /**
      * Get paths of created files. Returns empty array on Node.js.
      *
      * @module f/getOutputFiles
      * @async
      * @return {Promise<Array<TypeDefs.FileInfo>>} "Promise" returns path and size of created files.
      * @example
      * const files = await Gdal.getOutputFiles();
      * files.forEach((fileInfo) => {
      *   console.log(`file path: ${fileInfo.path}, file size: ${fileInfo.size}`);
      * });
  */
  function getOutputFiles() {
      return new Promise((resolve) => {
          const files = getFileList();
          resolve(files);
      });
  }

  /**
      * Get bytes of the file.
      *
      * @module f/getFileBytes
      * @async
      * @param {string|TypeDefs.FilePath} filePath The path of the file to be downloaded.
      * @return {Promise<Uint8Array>} "Promise" returns an array of byte of the file.
      * @example
      * // Download file from "/output" path on the browser.
      * const files = await Gdal.getOutputFiles();
      * const filePath = files[0].path;
      * const fileBytes = Gdal.getFileBytes(filePath);
      * const fileName = filePath.split('/').pop();
      * saveAs(fileBytes, filename);
      *
      * function saveAs(fileBytes, fileName) {
      *    const blob = new Blob([fileBytes]);
      *    const link = document.createElement('a');
      *    link.href = URL.createObjectURL(blob);
      *    link.download = fileName;
      *    link.click();
      * }
  */

  function getFileBytes(filePath) {
      return new Promise((resolve) => {
          let path;
          if (!filePath) {
              resolve(new Uint8Array());
              return;
          }

          if (filePath.local) {
              path = filePath.local;
          } else {
              path = filePath;
          }

          const bytes = GDALFunctions.Module.FS.readFile(path, { encoding: 'binary' });
          resolve(bytes);
      });
  }

  /* eslint-disable camelcase */

  var allJsFunctions = {
      ogr2ogr,
      gdal_translate,
      gdal_rasterize,
      gdalwarp,
      gdaltransform,
      open,
      close,
      getInfo,
      getOutputFiles,
      getFileBytes,
      drivers,
  };

  function onModuleReady(Gdal) {
      if (this.data && this.data.func && Gdal[this.data.func]) {
          Gdal[this.data.func](...this.data.params).then((result) => {
              postMessage({ success: true, id: this.data.id, data: result });
          }).catch((error) => {
              postMessage({ success: false, id: this.data.id, data: { message: error.message } });
          });
      } else {
          console.error('undefined function', this.data);
      }
  }

  function onError(err) {
      postMessage({ success: false, id: this.id, data: getSystemError(err.message) });
  }

  function workerInsideSupport(initGdalJs) {
      let moduleReady;
      onmessage = function onmessage(event) {
          if (event.data && event.data.func === 'constructor') {
              let config = { useWorker: false };
              if (event.data.params && event.data.params.config) {
                  config = { ...event.data.params.config, ...config };
              }
              moduleReady = initGdalJs(config);
              moduleReady.then(({ drivers }) => postMessage({ success: true, id: 'onload', data: drivers })).catch((e) => postMessage({ success: false, id: 'onload', data: e }));
              return null;
          }

          return moduleReady
              .then(onModuleReady.bind(event))
              .catch(onError.bind(event));
      };
  }

  const variables = {
      gdalWorkerWrapper: null,
      drivers: null,
  };
  class WorkerWrapper {
      constructor(file, config, onload) {
          this.promises = { onload: { resolve: onload, reject: console.error } };
          this.gdalWorker = new Worker(file);
          this.gdalWorker.onmessage = (evt) => {
              if (evt.data && evt.data.id && this.promises[evt.data.id]) {
                  if (evt.data.success) this.promises[evt.data.id].resolve(evt.data.data);
                  else this.promises[evt.data.id].reject(evt.data.data);
              }
          };
          this.gdalWorker.postMessage({ func: 'constructor', params: { config } });
      }

      call(i) {
          return new Promise((resolve, reject) => {
              i.id = Math.floor(Math.random() * 100000);
              this.promises[i.id] = { resolve, reject };
              this.gdalWorker.postMessage(i);
          });
      }

      terminate() {
          this.gdalWorker.terminate();
          delete this.gdalWorker;
          delete this.promises;
      }
  }

  const gdalProxy = new Proxy({}, {
      get(target, name) {
          if (name === 'then' || name === 'catch') return target;
          if (name === 'drivers') return variables.drivers;
          return (...args) => new Promise((resolve, reject) => {
              variables.gdalWorkerWrapper.call({ func: name, params: args })
                  .then((data) => { resolve(data); }).catch((e) => reject(e));
          });
      },
  });

  const workerOutsideSupport = {
      variables,
      WorkerWrapper,
      gdalProxy,
  };

  let gdalJsPromise;

  /**
      * Asynchronously initializes gdal3.js
      * @async
      * @function initGdalJs
      * @param      {Object} config Configuration Object.
      * @param      {string} config.path Parent path of wasm and data files.
      * @param      {Object} config.paths Use if filenames differ from gdal3WebAssembly.(data|wasm) and gdal3.js.
      * @param      {string} config.paths.wasm Wasm file path. (Default: gdal3WebAssembly.wasm)
      * @param      {string} config.paths.data Data file path. (Default: gdal3WebAssembly.data)
      * @param      {string} config.paths.js Js file path for web worker. (Default: gdal3.js)
      * @param      {string} config.dest Destination path where the created files will be saved. (Node.js only)
      * @param      {boolean} config.useWorker=true Using [Web Workers]{@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers} on the browser. It doesn't work on Node.js.
      * @return     {Promise<Gdal>} "Promise" returns Gdal namespace.
  */
  function initGdalJs(
      config = {},
  ) {
      if (gdalJsPromise) return gdalJsPromise;

      if (isNode || config.useWorker === false) {
          gdalJsPromise = new Promise((resolve, reject) => {
              const Module = GDALFunctions.Module;

              const originalOnAbortFunction = Module.onAbort;
              Module.onAbort = function onAbort(errorThatCausedAbort) {
                  reject(new Error(errorThatCausedAbort));
                  if (originalOnAbortFunction) {
                      originalOnAbortFunction(errorThatCausedAbort);
                  }
              };

              Module.print = function p(text) {
                  console.debug(`gdal stdout: ${text}`);
              };

              Module.printErr = function p(text) {
                  console.error(`gdal stderr: ${text}`);
              };

              Module.preRun = [({ ENV }) => {
                  ENV.PROJ_LIB = '/usr/share/proj';
                  ENV.GDAL_DATA = '/usr/share/gdal';
                  ENV.DXF_FEATURE_LIMIT_PER_BLOCK = '-1';
                  ENV.GDAL_NUM_THREADS = '0';
                  ENV.GDAL_ENABLE_DEPRECATED_DRIVER_GTM = 'YES';
                  // ENV.CPL_DEBUG = 'ON';
                  ENV.CPL_LOG_ERRORS = 'ON';
              }];

              Module.onRuntimeInitialized = function onRuntimeInitialized() {
                  initCFunctions();

                  Module.FS.mkdir(INPUTPATH);
                  Module.FS.mkdir(OUTPUTPATH);

                  if (config.dest) {
                      setRealOutputPath(config.dest);
                      mountDest(config.dest);
                  }

                  setDrivers();
              };

              Module.locateFile = function locateFile(fileName) {
                  let path = fileName;
                  if (config.paths && config.paths.wasm && fileName.split('.').pop() === 'wasm') {
                      path = config.paths.wasm;
                  } else if (config.paths && config.paths.data && fileName.split('.').pop() === 'data') {
                      path = config.paths.data;
                  }

                  let prefix = '';
                  if (config.path) {
                      prefix = config.path;
                      if (prefix.slice(-1) !== '/') prefix += '/';
                  } else if (isNode) {
                      prefix = 'node_modules/gdal3.js/dist/package/';
                  }
                  let output = prefix + path;
                  if (!isNode && output.substring(0, 4) !== 'http' && output[0] !== '/') output = `/${output}`;
                  return output;
              };

              if (isNode) {
                  Module.getPreloadedPackage = function getPreloadedPackage(packageName) {
                      // eslint-disable-next-line global-require
                      return require('fs').readFileSync(`./${packageName}`, { flag: 'r' }).buffer;
                  };
              }

              CModule(GDALFunctions.Module).then(() => {
                  resolve(allJsFunctions);
              });
          });
      } else {
          const workerJsName = (config.paths && config.paths.js) || 'gdal3.js';

          let prefix = '';
          if (config.path) {
              prefix = config.path;
              if (prefix.slice(-1) !== '/') prefix += '/';
          }

          gdalJsPromise = new Promise((resolve) => {
              workerOutsideSupport.variables.gdalWorkerWrapper = new workerOutsideSupport.WorkerWrapper(`${prefix}${workerJsName}`, config, (d) => {
                  workerOutsideSupport.variables.drivers = d;
                  resolve(workerOutsideSupport.gdalProxy);
              });
          });
      }
      return gdalJsPromise;
  }

  if (isNode) {
      global.location = { pathname: './' };
  }

  if (typeof window !== 'undefined') {
      window.initGdalJs = initGdalJs;
  }

  if (typeof importScripts === 'function') {
      workerInsideSupport(initGdalJs);
  }

  return initGdalJs;

}));