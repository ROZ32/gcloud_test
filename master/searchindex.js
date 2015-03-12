Search.setIndex({envversion:46,filenames:["datastore-api","datastore-batches","datastore-entities","datastore-keys","datastore-queries","datastore-transactions","gcloud-api","index","storage-acl","storage-api","storage-blobs","storage-buckets"],objects:{"gcloud.connection":{API_BASE_URL:[6,2,1,""],Connection:[6,1,1,""]},"gcloud.connection.Connection":{USER_AGENT:[6,4,1,""],credentials:[6,4,1,""],http:[6,4,1,""]},"gcloud.credentials":{generate_signed_url:[6,5,1,""],get_credentials:[6,5,1,""],get_for_service_account_json:[6,5,1,""],get_for_service_account_p12:[6,5,1,""]},"gcloud.datastore":{"__init__":[0,0,0,"-"],api:[0,0,0,"-"],batch:[1,0,0,"-"],connection:[0,0,0,"-"],entity:[2,0,0,"-"],helpers:[0,0,0,"-"],key:[3,0,0,"-"],query:[4,0,0,"-"],transaction:[5,0,0,"-"]},"gcloud.datastore.__init__":{set_defaults:[0,5,1,""]},"gcloud.datastore.api":{"delete":[0,5,1,""],allocate_ids:[0,5,1,""],get:[0,5,1,""],put:[0,5,1,""]},"gcloud.datastore.batch":{Batch:[1,1,1,""]},"gcloud.datastore.batch.Batch":{"delete":[1,3,1,""],add_auto_id_entity:[1,3,1,""],begin:[1,3,1,""],commit:[1,3,1,""],connection:[1,4,1,""],current:[1,7,1,""],dataset_id:[1,4,1,""],mutation:[1,4,1,""],put:[1,3,1,""],rollback:[1,3,1,""]},"gcloud.datastore.connection":{Connection:[0,1,1,""]},"gcloud.datastore.connection.Connection":{API_URL_TEMPLATE:[0,4,1,""],API_VERSION:[0,4,1,""],allocate_ids:[0,3,1,""],begin_transaction:[0,3,1,""],build_api_url:[0,3,1,""],commit:[0,3,1,""],lookup:[0,3,1,""],rollback:[0,3,1,""],run_query:[0,3,1,""]},"gcloud.datastore.entity":{Entity:[2,1,1,""]},"gcloud.datastore.entity.Entity":{exclude_from_indexes:[2,4,1,""],kind:[2,4,1,""]},"gcloud.datastore.helpers":{entity_from_protobuf:[0,5,1,""],key_from_protobuf:[0,5,1,""]},"gcloud.datastore.key":{Key:[3,1,1,""]},"gcloud.datastore.key.Key":{"__init__":[3,3,1,""],completed_key:[3,3,1,""],dataset_id:[3,4,1,""],flat_path:[3,4,1,""],id:[3,4,1,""],id_or_name:[3,4,1,""],is_partial:[3,4,1,""],kind:[3,4,1,""],name:[3,4,1,""],namespace:[3,4,1,""],parent:[3,4,1,""],path:[3,4,1,""],to_protobuf:[3,3,1,""]},"gcloud.datastore.query":{Iterator:[4,1,1,""],Query:[4,1,1,""]},"gcloud.datastore.query.Iterator":{next_page:[4,3,1,""]},"gcloud.datastore.query.Query":{OPERATORS:[4,4,1,""],add_filter:[4,3,1,""],ancestor:[4,4,1,""],dataset_id:[4,4,1,""],fetch:[4,3,1,""],filters:[4,4,1,""],group_by:[4,4,1,""],keys_only:[4,3,1,""],kind:[4,4,1,""],namespace:[4,4,1,""],order:[4,4,1,""],projection:[4,4,1,""]},"gcloud.datastore.transaction":{Transaction:[5,1,1,""]},"gcloud.datastore.transaction.Transaction":{begin:[5,3,1,""],commit:[5,3,1,""],current:[5,7,1,""],id:[5,4,1,""],rollback:[5,3,1,""]},"gcloud.exceptions":{BadRequest:[6,6,1,""],ClientError:[6,6,1,""],Conflict:[6,6,1,""],Forbidden:[6,6,1,""],GCloudError:[6,6,1,""],InternalServerError:[6,6,1,""],LengthRequired:[6,6,1,""],MethodNotAllowed:[6,6,1,""],MovedPermanently:[6,6,1,""],NotFound:[6,6,1,""],NotImplemented:[6,6,1,""],NotModified:[6,6,1,""],PreconditionFailed:[6,6,1,""],Redirection:[6,6,1,""],RequestRangeNotSatisfiable:[6,6,1,""],ResumeIncomplete:[6,6,1,""],ServerError:[6,6,1,""],ServiceUnavailable:[6,6,1,""],TemporaryRedirect:[6,6,1,""],TooManyRequests:[6,6,1,""],Unauthorized:[6,6,1,""],eklass:[6,4,1,""],make_exception:[6,5,1,""]},"gcloud.exceptions.BadRequest":{code:[6,4,1,""]},"gcloud.exceptions.Conflict":{code:[6,4,1,""]},"gcloud.exceptions.Forbidden":{code:[6,4,1,""]},"gcloud.exceptions.GCloudError":{code:[6,4,1,""],errors:[6,4,1,""]},"gcloud.exceptions.InternalServerError":{code:[6,4,1,""]},"gcloud.exceptions.LengthRequired":{code:[6,4,1,""]},"gcloud.exceptions.MethodNotAllowed":{code:[6,4,1,""]},"gcloud.exceptions.MovedPermanently":{code:[6,4,1,""]},"gcloud.exceptions.NotFound":{code:[6,4,1,""]},"gcloud.exceptions.NotImplemented":{code:[6,4,1,""]},"gcloud.exceptions.NotModified":{code:[6,4,1,""]},"gcloud.exceptions.PreconditionFailed":{code:[6,4,1,""]},"gcloud.exceptions.RequestRangeNotSatisfiable":{code:[6,4,1,""]},"gcloud.exceptions.ResumeIncomplete":{code:[6,4,1,""]},"gcloud.exceptions.ServiceUnavailable":{code:[6,4,1,""]},"gcloud.exceptions.TemporaryRedirect":{code:[6,4,1,""]},"gcloud.exceptions.TooManyRequests":{code:[6,4,1,""]},"gcloud.exceptions.Unauthorized":{code:[6,4,1,""]},"gcloud.storage":{"__init__":[9,0,0,"-"],acl:[8,0,0,"-"],blob:[10,0,0,"-"],bucket:[11,0,0,"-"],connection:[9,0,0,"-"],iterator:[9,0,0,"-"]},"gcloud.storage.__init__":{get_bucket:[9,5,1,""],get_connection:[9,5,1,""],set_default_bucket:[9,5,1,""],set_default_connection:[9,5,1,""],set_default_project:[9,5,1,""],set_defaults:[9,5,1,""]},"gcloud.storage.acl":{ACL:[8,1,1,""],BucketACL:[8,1,1,""],DefaultObjectACL:[8,1,1,""],ObjectACL:[8,1,1,""]},"gcloud.storage.acl.ACL":{add_entity:[8,3,1,""],all:[8,3,1,""],all_authenticated:[8,3,1,""],clear:[8,3,1,""],domain:[8,3,1,""],entity:[8,3,1,""],entity_from_dict:[8,3,1,""],get_entities:[8,3,1,""],get_entity:[8,3,1,""],group:[8,3,1,""],has_entity:[8,3,1,""],loaded:[8,4,1,""],reload:[8,3,1,""],reset:[8,3,1,""],save:[8,3,1,""],user:[8,3,1,""]},"gcloud.storage.acl.BucketACL":{clear:[8,3,1,""],reload:[8,3,1,""],save:[8,3,1,""]},"gcloud.storage.acl.ObjectACL":{clear:[8,3,1,""],reload:[8,3,1,""],save:[8,3,1,""]},"gcloud.storage.blob":{Blob:[10,1,1,""]},"gcloud.storage.blob.Blob":{"delete":[10,3,1,""],CHUNK_SIZE:[10,4,1,""],CUSTOM_PROPERTY_ACCESSORS:[10,4,1,""],acl:[10,4,1,""],cache_control:[10,4,1,""],component_count:[10,4,1,""],connection:[10,4,1,""],content_disposition:[10,4,1,""],content_encoding:[10,4,1,""],content_language:[10,4,1,""],content_type:[10,4,1,""],crc32c:[10,4,1,""],download_as_string:[10,3,1,""],download_to_file:[10,3,1,""],download_to_filename:[10,3,1,""],etag:[10,4,1,""],exists:[10,3,1,""],generate_signed_url:[10,3,1,""],generation:[10,4,1,""],id:[10,4,1,""],make_public:[10,3,1,""],md5_hash:[10,4,1,""],media_link:[10,4,1,""],metadata:[10,4,1,""],metageneration:[10,4,1,""],owner:[10,4,1,""],path:[10,4,1,""],public_url:[10,4,1,""],rename:[10,3,1,""],self_link:[10,4,1,""],size:[10,4,1,""],storage_class:[10,4,1,""],time_deleted:[10,4,1,""],updated:[10,4,1,""],upload_from_file:[10,3,1,""],upload_from_filename:[10,3,1,""],upload_from_string:[10,3,1,""]},"gcloud.storage.bucket":{Bucket:[11,1,1,""]},"gcloud.storage.bucket.Bucket":{"delete":[11,3,1,""],CUSTOM_PROPERTY_ACCESSORS:[11,4,1,""],acl:[11,4,1,""],configure_website:[11,3,1,""],connection:[11,4,1,""],copy_blob:[11,3,1,""],default_object_acl:[11,4,1,""],delete_blob:[11,3,1,""],delete_blobs:[11,3,1,""],disable_logging:[11,3,1,""],disable_website:[11,3,1,""],enable_logging:[11,3,1,""],etag:[11,4,1,""],exists:[11,3,1,""],get_all_blobs:[11,3,1,""],get_blob:[11,3,1,""],get_cors:[11,3,1,""],get_default_object_acl:[11,3,1,""],get_lifecycle:[11,3,1,""],get_logging:[11,3,1,""],id:[11,4,1,""],iterator:[11,3,1,""],location:[11,4,1,""],make_public:[11,3,1,""],metageneration:[11,4,1,""],new_blob:[11,3,1,""],owner:[11,4,1,""],patch:[11,3,1,""],path:[11,4,1,""],path_helper:[11,7,1,""],project_number:[11,4,1,""],self_link:[11,4,1,""],storage_class:[11,4,1,""],time_created:[11,4,1,""],update_cors:[11,3,1,""],update_lifecycle:[11,3,1,""],upload_file:[11,3,1,""],upload_file_object:[11,3,1,""],versioning_enabled:[11,4,1,""]},"gcloud.storage.connection":{Connection:[9,1,1,""]},"gcloud.storage.connection.Connection":{API_BASE_URL:[9,4,1,""],API_URL_TEMPLATE:[9,4,1,""],API_VERSION:[9,4,1,""],api_request:[9,3,1,""],build_api_url:[9,3,1,""],create_bucket:[9,3,1,""],delete_bucket:[9,3,1,""],get_all_buckets:[9,3,1,""],get_bucket:[9,3,1,""]},"gcloud.storage.iterator":{Iterator:[9,1,1,""]},"gcloud.storage.iterator.Iterator":{PAGE_TOKEN:[9,4,1,""],RESERVED_PARAMS:[9,4,1,""],get_items_from_response:[9,3,1,""],get_next_page_response:[9,3,1,""],get_query_params:[9,3,1,""],has_next_page:[9,3,1,""],reset:[9,3,1,""]},gcloud:{"__init__":[6,0,0,"-"],connection:[6,0,0,"-"],credentials:[6,0,0,"-"],exceptions:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","data","Python data"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"],"6":["py","exception","Python exception"],"7":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:data","3":"py:method","4":"py:attribute","5":"py:function","6":"py:exception","7":"py:staticmethod"},terms:{"3xx":6,"4xx":6,"5xx":6,"__init__":[0,3,6,9],"__key__":4,"_aclent":8,"_blobiter":11,"_datastore_v1_pb2":[0,1,3],"_dra_bucket":10,"_helper":[10,11],"_propertymixin":[10,11],"_serviceaccountcredenti":6,"abstract":[1,4,5,6],"boolean":[0,3,4,6,8,9,10,11],"break":9,"byte":[1,2,4,10],"case":[1,2,9],"class":[0,1,2,3,4,5,6,8,9,10,11],"default":[0,1,4,5,6,8,9,10,11],"final":3,"float":4,"import":[0,1,4,5,7,8,9,11],"int":[6,10],"long":[6,10,11],"new":[0,3,6,8,9,10,11],"public":[10,11],"return":[0,1,2,3,4,5,6,8,9,10,11],"short":8,"static":[1,5,11],"true":[0,3,5,6,8,9,10,11],"while":9,abl:[6,7,8],about:[6,10,11],absenc:10,accept:[6,9],access:[6,8,9,10,11],accesslog:11,accessor:[10,11],accident:11,account:[6,8],act:2,actual:[0,2,8,9,11],add:[1,6,8,11],add_auto_id_ent:1,add_ent:8,add_filt:[0,4],addit:[6,9],address:8,advanc:[0,6],after:[2,5,8],again:2,against:[4,6],agent:6,akin:[0,2,9],alia:6,all:[0,2,3,8,9,10,11],all_authent:8,alloc:0,allocate_id:0,allocateid:0,allow:[0,2,6,7,10],allus:8,along:0,alread:1,alreadi:[1,5,8,9,11],also:[1,5,6,8,9,11],altern:8,amount:10,ancestor:4,ani:[0,1,2,6,8,10],anoth:8,anyth:[8,11],api_access_endpoint:6,api_bas:0,api_base_url:[0,6,9],api_request:9,api_url_templ:[0,9],api_vers:[0,9],app:[6,8,9],app_credenti:[0,9],appar:11,appassertioncredenti:6,appendix:10,appengin:6,appli:[0,4],applic:[8,10],approv:11,apt:7,arbitrari:10,arg:9,argument:[0,3,6,8,9],around:[6,10],ask:9,assembl:9,assert:5,assign:[1,2,4,5,11],associ:[3,6,9],attach:6,attempt:11,attribut:[0,6,11],auth:6,authent:[0,6,8,9],author:6,authorized_us:6,automat:[1,2,5],avail:[5,9,10,11],back:[0,1,2,5,9],backend:[0,2,11],bad:6,badrequest:6,bamboo:[0,9],base:[0,1,2,3,4,5,6,8,9,10,11],base_url:0,basi:8,basic:[0,3,6],bcp47:10,bearer:6,becaus:5,been:[1,3,4,8,10],befor:10,beforehand:7,begin:[0,1,5,9,10],begin_transact:0,begintransact:0,begintransactionrespons:0,begun:5,belong:[0,8,9,10],between:[0,9],blank:[8,11],blob:[6,7,8,9],blob_valu:[1,2],block:[1,5],bodi:[6,9],both:0,breviti:8,bucket1:[8,9],bucket1_nam:8,bucket2:[8,9],bucket2_nam:8,bucket:[6,7,8,9,10],bucket_nam:[8,9,11],bucketacl:8,build:[0,1,5,8,9],build_api_url:[0,9],built:[1,2],builtin:2,bulk:[1,5],bunch:[0,8],cach:10,cache_control:10,cachecontrol:10,call:[0,1,5,6,8,9,11],callabl:11,callback:11,can:[0,1,2,3,5,6,7,8,9,10,11],cannot:[0,9],capabl:[0,6],certain:10,chain:8,chang:[2,8,11],check:[6,8,11],checksum:10,child:3,chunk:10,chunk_siz:10,clear:8,click:[0,9],client:[0,6],client_email:6,client_id:6,client_secret:6,clienterror:6,clientsecret:6,clone:7,close:6,code:[0,1,5,6,9],collect:1,com:[6,7,8,9,10,11],come:0,command:6,commit:[0,1,5],compani:8,compat:8,complet:[0,1,5,11],completed_kei:3,compon:[9,10],component_count:10,componentcount:10,comput:[6,9],concept:[0,9,10,11],concret:6,condit:0,confict:9,configur:11,configure_websit:11,conflict:[6,9,11],connection_typ:6,consist:[0,3,8],consol:[0,6,9],construct:[0,1,8,9],constructor:3,consum:9,contain:[0,6,8,9,11],content:[6,7,9,10],content_disposit:10,content_encod:10,content_languag:10,content_md5:6,content_typ:[6,9,10],contentdisposit:10,contentencod:10,contentlanguag:10,contenttyp:10,context:[0,1,5],control:[4,8,10],conveni:4,convert:[2,9],copi:[0,3,10,11],copy_blob:11,cor:11,correct:9,correspond:[1,3,6,8,9,10,11],costli:10,could:[2,10],cousin:6,cowardli:11,cowork:8,coworker1:8,coworker2:8,crc32c:10,creat:[0,1,2,3,4,5,6,8,9,10,11],create_bucket:9,credenti:0,crypto:7,current:[0,1,2,3,4,5,6,8,9,10,11],cursor:[0,4],custom:[6,8,10,11],custom_property_accessor:[10,11],data:[0,2,3,4,6,7,8,9,10,11],databas:[0,2,7],dataset:[0,1,3,4,5,9],dataset_id:[0,1,3,4,5],datastore_pb:0,datastoreservic:0,datetim:[4,6,10],deal:0,decod:2,def:9,default_object_acl:11,defaultobjectacl:[8,11],defer:0,defin:[6,9,10],delet:[0,1,2,5,9,10,11],delete_blob:[10,11],delete_bucket:9,delimit:11,delimt:11,deliveri:11,demand:[10,11],demonstr:9,depend:10,deriv:[0,5],descend:4,describ:[6,11],destination_bucket:11,detail:[0,6,9,10,11],detect:6,determin:[5,9,10,11],dev:7,develop:[0,9,11],dict:[2,3,6,8,9,10,11],dictionari:[2,6,8,9],differ:[6,9],directli:[0,6,9],directori:11,disabl:11,disable_log:11,disable_websit:11,disk:9,disposit:10,do_some_work:[1,5],doc:[0,6,9,10,11],document:[6,10],doe:[0,1,3,9,11],doesn:[5,8,9,11],doesnt:11,domain:[8,11],don:[1,5,10,11],done:[1,8,9],download:[0,6,9,10],download_as_str:[9,10],download_to_fil:10,download_to_filenam:10,duplic:[2,10],dur:1,durabl:[10,11],durable_reduced_avail:[10,11],dure:1,each:[2,6,8,9,11],earli:9,effect:[5,10],either:[0,1,3,5,6,8,9,10,11],eklass:6,element:[3,5],els:[5,11],elsewher:9,empti:[0,6,9,11],emul:11,enabl:[0,11],enable_log:11,encod:[2,10],end:2,end_cursor:4,endpoint:9,engin:[6,9],enter:5,entir:2,entiti:[0,1],entity1:[1,5],entity2:[1,5],entity_dict:8,entity_from_dict:8,entity_from_protobuf:0,entity_typ:8,entitykind:[0,2,3],entri:[1,8,11],enviro:9,environ:[0,6,9],environmenterror:0,equal:0,equival:[4,11],error:[1,5,6],establish:9,etag:[10,11],etc:[8,9],even:[3,8],eventu:0,everi:1,everyth:7,exampl:[0,1,4,5,8,9,11],except:[1,5],exclude_from_index:2,execut:[4,5],exist:[0,1,2,3,5,8,9,10,11],exit:[1,5],expect:6,expect_json:9,expir:[6,10],explicitli:[0,1,5,6,9,10],express:4,extra:[2,3],extra_param:9,extrem:11,facilit:[0,9],factori:[0,6,8,9],fail:[5,6],fall:[0,9],fals:[0,5,8,9,10,11],far:1,favor:0,fetch:[0,4],fetch_pag:0,few:9,fewer:9,field:[2,4,8,10,11],file:[0,6,7,9,10,11],file_obj:[10,11],filenam:[10,11],fill:0,filter:[4,11],find:[9,11],fine:4,first:[6,9,10,11],flag:[6,8],flat_path:3,follow:[1,5,6,8],foo:3,forbidden:6,forc:11,form:4,format:[6,10,11],found:[6,9,11],fresh:8,friendli:0,from:[0,1,2,3,4,5,6,7,8,9,10,11],frozenset:9,fstat:10,full:[3,8,9],fulli:7,futur:[0,9,11],gce:6,gcloud_bucket_nam:9,gcloud_project:9,gcloud_tests_dataset_id:[0,9],gcloud_tests_project_id:[0,9],gclouderror:6,gener:[0,5,6,9,10],generate_signed_url:[6,10],get:[0,2,4,6],get_all_blob:[9,11],get_all_bucket:9,get_blob:[9,11],get_bucket:[7,8,9,11],get_connect:[6,8,9,11],get_cor:11,get_credenti:6,get_dataset:1,get_default_object_acl:11,get_ent:8,get_for_service_account_json:6,get_for_service_account_p12:6,get_items_from_respons:9,get_lifecycl:11,get_log:11,get_next_page_respons:9,get_query_param:9,getter:[1,3,5,6,9,10,11],git:7,github:[0,7,9],give:10,given:[0,4,6,9,10,11],googl:[0,6,7,8,9,10,11],google_application_credenti:[0,6,9],googleapi:[6,9],googlecloudplatform:7,googlecredenti:6,grant:8,grant_:8,grant_own:8,grant_read:8,grant_writ:8,granular:8,group:[1,4,8],group_bi:4,guess:10,guess_typ:10,handl:[6,10,11],happen:8,has_ent:8,has_next_pag:9,hash:[6,10],have:[0,3,5,6,7,8,9,10,11],header:[6,10],here:9,hierarchi:11,hood:[0,6,8],host:11,howev:[0,1,2,5,6],html:[6,10,11],http:[0,6,9,10,11],httplib2:6,id_or_nam:3,ident:[8,9],identifi:[0,3,8],idiomat:6,ietf:[10,11],imagin:8,immut:3,implement:[6,9],implicit:[3,4,6,9,10],implicitli:[0,6,9],includ:[0,4,9],incompat:0,incomplet:6,incomplete_kei:0,increas:8,index:[2,11],indic:[0,3,6],individu:[0,9,11],infer:0,info:[10,11],inform:6,infrastructur:7,initi:[0,3,5],insert:9,insert_auto_id:[1,5],insid:[1,5,9,11],instanc:[0,1,2,3,6,11],instanti:9,instead:[6,8,9],integ:[0,3,4,10,11],intend:6,intern:[0,6],internalservererror:6,invalid:[4,9],is_parti:[3,5],is_valid:9,isn:[9,11],isol:[0,5],item:9,iter:[4,8],itself:1,jame:4,jpg:11,json:[0,6,9],json_api:[6,10,11],json_credentials_path:6,just:[0,2,9,10,11],keep:1,kei:[0,1,2],key3:1,key_from_protobuf:0,key_pb:0,keys_onli:4,keyword:[0,3],kind:[0,2,3,4],kitten:11,know:2,known:[6,8],kwarg:[3,9],lambda:11,languag:10,larg:10,last:3,latest:9,left:8,length:[3,6],lengthrequir:6,level:[0,4,6],libssl:7,lifecycl:[10,11],like:[0,2,8,10,11],limit:4,line:6,list:[0,1,3,4,6,8,9,11],live:[0,9,10],load:8,local:[8,9,11],locat:11,log:[10,11],logbucket:11,logobjectprefix:11,look:[0,9],lookup:[0,8],low:4,machin:[0,9],mai:[0,3,6],mail:[6,8],main:[0,9,11],main_page_suffix:11,make:[0,1,6,8,9,10,11],make_except:6,make_publ:[10,11],manag:[1,5,7],mani:6,manipul:8,manual:5,map:[0,1,4,6,10,11],match:[0,1,4,9],max_result:11,maximum:11,md5:[6,10],md5_hash:10,mean:[2,5,6,10],media:10,media_link:10,medialink:10,messag:6,metadata:[8,10],metagener:[10,11],method:[0,1,5,6,8,9,10,11],methodnotallow:6,might:2,mime:9,mimetyp:10,miss:0,modifi:6,modul:[0,9],more:[0,4,9,11],more_result:[0,4],most:9,mount:9,move:6,movedperman:6,multipl:10,must:[6,10,11],mutabl:[2,8],mutat:[0,1,5],mutation_pb:0,mutationresult:0,mutuat:[1,5],my_other_acl:8,myitemclass:9,myiter:9,mykind:0,name:[0,2,3,4,6,7,9,10,11],namespac:[0,3,4],necessari:5,need:[0,1,6,9,11],new_blob:[7,9,11],new_nam:[10,11],newli:[9,10],next:9,next_pag:4,nextpagetoken:9,non:[0,6,7,8],none:[0,1,2,3,4,5,6,8,9,10,11],nonetyp:[3,6,9,10],not_found_pag:11,note:8,notfound:[6,9,10,11],notimpl:6,notimplementederror:8,notmodifi:6,now:[8,9],num_id:0,num_retri:10,number:[0,10,11],oauth2:[0,6],oauth2client:[0,6],oauth2credenti:[0,6],object:[0,1,2,3,4,6,8,9],object_prefix:11,objectacl:8,obtain:0,occur:0,octet:10,odd:3,off:9,offici:2,offset:4,old:10,on_error:11,onc:[0,1,5,9,11],onli:[0,2,3,4,6,9,10,11],open:[10,11],openssl:7,oper:[1,4,5,9,10,11],operatiuon:1,option:[0,2,4,6,9,10,11],order:[0,1,4,6,8,9,11],org:[6,8,10,11],other:[2,6,8,9,10],other_arg:9,otherwis:11,our:[1,10,11],over:[0,1,4,9],overrid:9,overridden:[1,8,9],overriden:9,overwrit:10,own:8,owner:[8,10,11],p12:6,packag:0,page:[4,9,11],page_token:9,pagetoken:9,pair:8,param:0,paramet:[0,1,2,3,4,5,6,8,9,10,11],parent:[2,3],parent_kei:3,pars:9,part:[0,1,4,8],partial:[0,1,2,3],particular:[0,6,8,9],particularli:10,pass:[0,3,4,6,10,11],patch:11,path:[0,3,6,9,10,11],path_arg:3,path_help:11,per:[8,10],period:10,perman:6,permiss:8,persist:2,person:[0,4,7],piec:9,pip:[0,7,9],pkcs12:6,plain:10,plan:9,platform:6,point:[6,8],pointer:[0,2,6,9],polici:[10,11],popul:9,possibl:[2,9],post:9,preced:6,precompil:7,precondit:6,preconditionfail:6,prefix:11,prepend:4,prevent:11,primit:9,print:[8,9,11],privat:[0,6,9],private_kei:6,private_key_id:6,private_key_path:6,probabl:11,process:9,product:6,project:[0,4,7,8,9,11],project_id:9,project_numb:11,projectnumb:11,propag:[10,11],proper:9,properti:[0,1,2,4,9,10,11],property_nam:4,protobuf:[0,1,3,4],protocol:6,provid:[0,5,6,8,9,10,11],public_url:10,publicli:10,purpos:9,put:[0,1,2,5,7,11],pycrypto:7,pyopenssl:7,python2:[1,2],python3:[1,2],python:[0,2,6,7,9,11],queri:0,query_param:9,query_pb:0,quickli:[0,9,11],race:0,rais:[0,1,3,4,5,8,9,10,11],rang:6,rather:0,read:[0,8,9,10,11],readi:6,realli:11,recurs:11,redirect:6,reduc:[10,11],refer:[5,6,8],referenc:6,refresh:6,refresh_token:6,refus:11,registr:[0,9],regress:[0,9],regular:2,rel:11,relat:[0,2,6,7,8,11],reli:[2,9],reload:[8,11],remain:3,rememb:1,remot:[9,11],remov:[1,8],renam:10,replac:1,repositori:7,repres:[0,1,2,3,4,5,6,8,9,11],represent:3,request:[0,1,6,9,10,11],requestrangenotsatisfi:6,requir:[2,3,4,6,9,10],reserved_param:9,reset:[8,9],resourc:[6,9,10],respons:[6,9,11],rest:9,restrict:4,result:[0,4,9],resum:6,resumeincomplet:6,retri:10,retriev:[0,2,10,11],revok:8,revoke_:8,revoke_own:8,revoke_read:8,revoke_writ:8,rewind:10,rfc2616:[6,10,11],rfc4960:10,rfc6266:10,rfc7231:10,rfc7234:10,rfc:[10,11],role:[8,10,11],roll:[1,5],rollback:[0,1,5],root:[0,11],row:[0,2],rpc:0,rule:[8,11],run_queri:0,runqueri:0,runtim:11,sai:11,salli:4,same:[0,1,3,5,8,9,10,11],sampl:[0,9],satisfi:6,save:[0,1,2,5,8],schemaless:7,scope:[0,6],script:[0,9],search:[0,9],sec10:6,secret:6,section:[10,11],see:[0,6,9,10,11],seek:[6,10],self:9,self_link:[10,11],selflink:[10,11],send:[0,1,8,9,11],sent:1,separ:11,sequenc:[2,4,11],serializ:0,serv:4,server:[0,1,6],servererror:6,servic:[2,6],service_account:6,serviceunavail:6,set:[0,1,2,3,4,5,6,8,9,10,11],set_default:[0,9],set_default_bucket:9,set_default_connect:[0,9],set_default_dataset_id:0,set_default_namespac:0,set_default_project:9,setup:7,sever:9,share:6,shell:[0,9],shift:[0,9],shortcut:[0,9,11],should:[0,6,9,10,11],shouldn:[0,9],side:5,sign:[6,8,10],signedjwtassertioncredenti:6,simpl:6,simpli:6,simplifi:9,singl:[0,1,2,4,6],size:10,skipped_result:0,slow:10,snapshot:0,snippet:[1,5],some:[0,9],someexcept:5,somehow:11,someth:11,sorri:9,sort:4,sourc:[0,1,2,3,4,5,6,7,8,9,10,11],special:8,specif:[6,8,10],specifi:[4,9],specifyingloc:11,stack:5,standard:[9,10,11],start:0,start_cursor:4,state:[1,4],statement:[1,5],statu:[6,11],step:2,still:[8,9],stop:0,storag:6,storage_class:[10,11],storageclass:[10,11],store:[1,2,4,5,6,7,8,10,11],str:[1,2,4],stream:10,string:[0,2,3,4,5,6,8,9,10,11],string_valu:1,strong:0,stuff:11,subclass:[2,6,8,9],submit:11,succeed:5,successfulli:5,sudo:7,superflu:6,suppli:4,support:9,suppress:11,sure:[1,11],system:[9,11],take:[2,4,11],talk:6,techniqu:11,templat:[0,9],temporari:6,temporarili:10,temporaryredirect:6,test:[0,6,7,9],text:[1,2,6,10,11],text_valu:2,than:[0,11],thei:[6,8],them:[0,1],thi:[0,1,2,4,5,6,7,8,9,10,11],thing:[5,9],those:[1,5,9,10,11],through:[4,9],time:[5,10],time_cr:11,time_delet:10,timecr:11,timedelet:10,timedelta:[6,10],timestamp:[10,11],to_protobuf:[0,3],togeth:8,token:6,too:6,tool:[6,10,11],toomanyrequest:6,topmost:[1,5],track:1,transact:[0,1],transaction_id:0,transat:0,transport:[6,9],tripl:0,troubl:7,tupl:[0,2,3,4,6,8],two:[1,5,9],txt:[6,7,9,11],type:[0,1,2,3,4,5,6,8,9,10,11],typic:[0,6,9,11],ubuntu:7,unauthor:6,unavail:6,under:[0,6,8],underli:10,understand:[0,6],unicod:[1,2],uniqu:[0,8,10],unless:[3,10],unmarshal:0,until:[5,6,10],updat:[1,10,11],update_cor:11,update_lifecycl:11,upload:[9,10,11],upload_contents_from_str:7,upload_fil:[9,11],upload_file_object:11,upload_from_fil:10,upload_from_filenam:10,upload_from_str:[9,10],upon:[1,5],upsert:5,uri:[6,10,11],url:[0,6,9,10,11],use_json:6,user:[0,6,8,10],user_ag:6,usual:0,utf:[2,10],v1beta2:0,val:0,valid:10,valu:[0,1,2,4,6,8,9,10,11],valueerror:[0,1,3,4,5,11],variabl:[0,6,9],verb:[6,10],veri:10,version:[0,9,10,11],versioning_en:11,via:[0,9],wai:9,walk:9,want:[1,5,7,8,9,10,11],websit:11,well:[5,6,9,11],what:9,when:[0,1,2,5,6,8,9,10,11],whenev:10,where:[0,4,9,11],whether:[8,9,10,11],which:[0,1,2,4,6,8,9,10,11],who:8,whole:11,whose:[2,3],within:[5,10],without:[1,2,5,6,8],won:[5,8,9],work:[1,8,9,11],world:0,would:[2,6],wouldn:0,wrapper:[6,10],write:[8,9,10],wrote:0,www:[6,9,11],xact:5,yield:9,you:[0,1,2,5,6,7,8,9,10,11],your:[0,7,9,11]},titles:["Datastore","Batches","Entities","Keys","Queries","Transactions","GCloud Package","Getting started","ACL","Storage","Blobs / Objects","Buckets"],titleterms:{"function":0,"try":[0,9],acl:8,api:0,batch:1,blob:10,bucket:11,cloud:[0,7,9],connect:[0,6,9],credenti:6,datastor:[0,7],demo:[0,9],entiti:2,except:6,gcloud:[0,6,9],get:7,helper:0,instal:[0,9],interact:0,iter:9,kei:3,librari:[0,9],object:10,packag:6,queri:4,run:[0,9],second:[0,9],start:7,storag:[7,9],transact:5,yourself:[0,9]}})