resource_groups = {
    "azurerm_resource_group": 0,
    "azurerm_app_service": 1,
    "azurerm_app_service_plan": 1,
    "azurerm_role_assignment": 2,
    "azurerm_role_definition": 2,
    "azurerm_automation_account": 3,
    "azurerm_automation_credential": 3,
    "azurerm_automation_runbook": 3,
    "azurerm_automation_schedule": 3,
    "azurerm_application_insights": 4,
    "azurerm_cdn_profile": 5,
    "azurerm_cdn_endpoint": 5,
    "azurerm_availability_set": 6,
    "azurerm_managed_disk": 6,
    "azurerm_snapshot": 6,
    "azurerm_image": 6,
    "azurerm_virtual_machine": 6,
    "azurerm_virtual_machine_extension": 6,
    "azurerm_virtual_machine_scale_set": 6,
    "azurerm_container_group": 7,
    "azurerm_container_registry": 7,
    "azurerm_container_service": 7,
    "azurerm_cosmosdb_account": 8,
    "azurerm_mysql_configuration": 9,
    "azurerm_mysql_database": 9,
    "azurerm_mysql_firewall_rule": 9,
    "azurerm_mysql_server": 9,
    "azurerm_postgresql_configuration": 9,
    "azurerm_postgresql_database": 9,
    "azurerm_postgresql_firewall_rule": 9,
    "azurerm_postgresql_server": 9,
    "azurerm_sql_database": 9,
    "azurerm_sql_elasticpool": 9,
    "azurerm_sql_firewall_rule": 9,
    "azurerm_sql_server": 9,
    "azurerm_dns_a_record": 10,
    "azurerm_dns_aaaa_record": 10,
    "azurerm_dns_cname_record": 10,
    "azurerm_dns_mx_record": 10,
    "azurerm_dns_ns_record": 10,
    "azurerm_dns_ptr_record": 10,
    "azurerm_dns_srv_record": 10,
    "azurerm_dns_txt_record": 10,
    "azurerm_dns_zone": 10,
    "azurerm_key_vault": 11,
    "azurerm_key_vault_certificate": 11,
    "azurerm_key_vault_key": 11,
    "azurerm_key_vault_secret": 11,
    "azurerm_lb": 12,
    "azurerm_lb_backend_address_pool": 12,
    "azurerm_lb_rule": 12,
    "azurerm_lb_nat_rule": 12,
    "azurerm_lb_nat_pool": 12,
    "azurerm_lb_probe": 12,
    "azurerm_eventgrid_topic": 13,
    "azurerm_eventhub": 13,
    "azurerm_eventhub_authorization_rule": 13,
    "azurerm_eventhub_consumer_group": 13,
    "azurerm_eventhub_namespace": 13,
    "azurerm_servicebus_namespace": 13,
    "azurerm_servicebus_queue": 13,
    "azurerm_servicebus_subscription": 13,
    "azurerm_servicebus_topic": 13,
    "azurerm_application_gateway": 14,
    "azurerm_express_route_circuit": 14,
    "azurerm_local_network_gateway": 14,
    "azurerm_network_interface": 14,
    "azurerm_network_security_group": 14,
    "azurerm_network_security_rule": 14,
    "azurerm_public_ip": 14,
    "azurerm_route": 14,
    "azurerm_route_table": 14,
    "azurerm_subnet": 14,
    "azurerm_traffic_manager_endpoint": 14,
    "azurerm_traffic_manager_profile": 14,
    "azurerm_virtual_network": 14,
    "azurerm_virtual_network_peering": 14,
    "azurerm_log_analytics_workspace": 15,
    "azurerm_redis_cache": 16,
    "azurerm_redis_firewall_rule": 16,
    "azurerm_search_service": 17,
    "azurerm_storage_account": 18,
    "azurerm_storage_container": 18,
    "azurerm_storage_blob": 18,
    "azurerm_storage_queue": 18,
    "azurerm_storage_share": 18,
    "azurerm_storage_table": 18,
    "azurerm_template_deployment": 19,
    "powerdns_record": 20,
    "bitbucket_default_reviewers": 21,
    "bitbucket_hook": 21,
    "bitbucket_repository": 21,
    "newrelic_alert_channel": 22,
    "newrelic_alert_condition": 22,
    "newrelic_alert_policy": 22,
    "newrelic_alert_policy_channel": 22,
    "newrelic_nrql_alert_condition": 22,
    "opc_compute_acl": 23,
    "opc_compute_image_list": 23,
    "opc_compute_image_list_entry": 23,
    "opc_compute_instance": 23,
    "opc_compute_ip_address_association": 23,
    "opc_compute_ip_address_prefix_set": 23,
    "opc_compute_ip_address_reservation": 23,
    "opc_compute_ip_association": 23,
    "opc_compute_ip_network": 23,
    "opc_compute_ip_network_exchange": 23,
    "opc_compute_ip_reservation": 23,
    "opc_compute_route": 23,
    "opc_compute_sec_rule": 23,
    "opc_compute_security_application": 23,
    "opc_compute_security_association": 23,
    "opc_compute_security_ip_list": 23,
    "opc_compute_security_list": 23,
    "opc_compute_security_protocol": 23,
    "opc_compute_security_rule": 23,
    "opc_compute_ssh_key": 23,
    "opc_compute_storage_volume": 23,
    "opc_compute_storage_volume_snapshot": 23,
    "opc_compute_vnic_set": 23,
    "virtual_guest": 24,
    "ssh_key": 24,
    "cloudflare_record": 25,
    "openstack_blockstorage_volume_v1": 26,
    "openstack_blockstorage_volume_v2": 26,
    "openstack_blockstorage_volume_attach_v2": 26,
    "openstack_compute_flavor_v2": 27,
    "openstack_compute_floatingip_v2": 27,
    "openstack_compute_floatingip_associate_v2": 27,
    "openstack_compute_instance_v2": 27,
    "openstack_compute_keypair_v2": 27,
    "openstack_compute_secgroup_v2": 27,
    "openstack_compute_servergroup_v2": 27,
    "openstack_compute_volume_attach_v2": 27,
    "openstack_dns_recordset_v2": 28,
    "openstack_dns_zone_v2": 28,
    "openstack_identity_project_v3": 29,
    "openstack_identity_user_v3": 29,
    "openstack_images_image_v2": 30,
    "openstack_networking_floatingip_v2": 31,
    "openstack_networking_network_v2": 31,
    "openstack_networking_port_v2": 31,
    "openstack_networking_router_interface_v2": 31,
    "openstack_networking_router_route_v2": 31,
    "openstack_networking_router_v2": 31,
    "openstack_networking_subnet_v2": 31,
    "openstack_networking_secgroup_v2": 31,
    "openstack_networking_secgroup_rule_v2": 31,
    "openstack_lb_member_v1": 32,
    "openstack_lb_monitor_v1": 32,
    "openstack_lb_pool_v1": 32,
    "openstack_lb_vip_v1": 32,
    "openstack_lb_loadbalancer_v2": 32,
    "openstack_lb_listener_v2": 32,
    "openstack_lb_pool_v2": 32,
    "openstack_lb_member_v2": 32,
    "openstack_lb_monitor_v2": 32,
    "openstack_fw_firewall_v1": 33,
    "openstack_fw_policy_v1": 33,
    "openstack_fw_rule_v1": 33,
    "openstack_objectstorage_container_v1": 34,
    "azure_affinity_group": 35,
    "azure_data_disk": 35,
    "azure_dns_server": 35,
    "azure_hosted_service": 35,
    "azure_instance": 35,
    "azure_local_network_connection": 35,
    "azure_security_group": 35,
    "azure_security_group_rule": 35,
    "azure_sql_database_server": 35,
    "azure_sql_database_server_firewall_rule": 35,
    "azure_sql_database_service": 35,
    "azure_storage_blob": 35,
    "azure_storage_container": 35,
    "azure_storage_queue": 35,
    "azure_storage_service": 35,
    "azure_virtual_network": 35,
    "dyn_record": 36,
    "vault_auth_backend": 37,
    "vault_aws_auth_backend_cert": 37,
    "vault_aws_auth_backend_client": 37,
    "vault_aws_auth_backend_login": 37,
    "vault_aws_auth_backend_role": 37,
    "vault_aws_auth_backend_sts_role": 37,
    "vault_aws_secret_backend": 37,
    "vault_aws_secret_backend_role": 37,
    "vault_generic_secret": 37,
    "vault_mount": 37,
    "vault_policy": 37,
    "dme_record": 38,
    "oneandone_firewall_policy": 39,
    "oneandone_loadbalancer": 39,
    "oneandone_monitoring_policy": 39,
    "oneandone_private_network": 39,
    "oneandone_public_ip": 39,
    "oneandone_server": 39,
    "oneandone_shared_storage": 39,
    "oneandone_vpn": 39,
    "ultradns_dirpool": 40,
    "ultradns_probe_http": 40,
    "ultradns_probe_ping": 40,
    "ultradns_record": 40,
    "ultradns_tcpool": 40,
    "aws_group": 41,
    "google_bigquery_dataset": 43,
    "google_bigquery_table": 43,
    "google_bigtable_instance": 44,
    "google_bigtable_table": 44,
    "google_folder": 45,
    "google_folder_iam_policy": 45,
    "google_kms_key_ring": 45,
    "google_organization_policy": 45,
    "google_project": 45,
    "google_project_iam_binding": 45,
    "google_project_iam_member": 45,
    "google_project_iam_policy": 45,
    "google_project_service": 45,
    "google_project_services": 45,
    "google_service_account": 45,
    "google_service_account_key": 45,
    "google_compute_address": 46,
    "google_compute_autoscaler": 46,
    "google_compute_backend_bucket": 46,
    "google_compute_backend_service": 46,
    "google_compute_disk": 46,
    "google_compute_firewall": 46,
    "google_compute_forwarding_rule": 46,
    "google_compute_global_address": 46,
    "google_compute_global_forwarding_rule": 46,
    "google_compute_health_check": 46,
    "google_compute_http_health_check": 46,
    "google_compute_https_health_check": 46,
    "google_compute_image": 46,
    "google_compute_instance": 46,
    "google_compute_instance_group": 46,
    "google_compute_instance_group_manager": 46,
    "google_compute_instance_template": 46,
    "google_compute_network_peering": 46,
    "google_compute_network": 46,
    "google_compute_project_metadata": 46,
    "google_compute_project_metadata_item": 46,
    "google_compute_region_autoscaler": 46,
    "google_compute_region_backend_service": 46,
    "google_compute_region_instance_group_manager": 46,
    "google_compute_route": 46,
    "google_compute_router": 46,
    "google_compute_router_interface": 46,
    "google_compute_router_peer": 46,
    "google_compute_shared_vpc_host_project": 46,
    "google_compute_shared_vpc_service_project": 46,
    "google_compute_snapshot": 46,
    "google_compute_ssl_certificate": 46,
    "google_compute_subnetwork": 46,
    "google_compute_target_http_proxy": 46,
    "google_compute_target_https_proxy": 46,
    "google_compute_target_ssl_proxy": 46,
    "google_compute_target_tcp_proxy": 46,
    "google_compute_target_pool": 46,
    "google_compute_url_map": 46,
    "google_compute_vpn_gateway": 46,
    "google_compute_vpn_tunnel": 46,
    "google_container_cluster": 47,
    "google_container_node_pool": 47,
    "google_dataproc_cluster": 48,
    "google_dns_managed_zone": 49,
    "google_dns_record_set": 49,
    "google_pubsub_topic": 50,
    "google_pubsub_subscription": 50,
    "google_runtimeconfig_config": 51,
    "google_runtimeconfig_variable": 51,
    "google_sourcerepo_repository": 52,
    "google_spanner_instance": 53,
    "google_spanner_database": 53,
    "google_sql_database": 54,
    "google_sql_database_instance": 54,
    "google_sql_user": 54,
    "google_logging_billing_account_sink": 55,
    "google_logging_folder_sink": 55,
    "google_logging_project_sink": 55,
    "google_storage_bucket": 56,
    "google_storage_bucket_acl": 56,
    "google_storage_bucket_object": 56,
    "google_storage_object_acl": 56,
    "consul_agent_service": 57,
    "consul_catalog_entry": 57,
    "consul_keys": 57,
    "consul_key_prefix": 57,
    "consul_node": 57,
    "consul_prepared_query": 57,
    "consul_service": 57,
    "chef_data_bag": 58,
    "chef_data_bag_item": 58,
    "chef_environment": 58,
    "chef_node": 58,
    "chef_role": 58,
    "logentries_log": 59,
    "logentries_logset": 59,
    "rabbitmq_binding": 60,
    "rabbitmq_exchange": 60,
    "rabbitmq_permissions": 60,
    "rabbitmq_policy": 60,
    "rabbitmq_queue": 60,
    "rabbitmq_user": 60,
    "rabbitmq_vhost": 60,
    "clc_server": 61,
    "clc_group": 61,
    "clc_public_ip": 61,
    "clc_load_balancer": 61,
    "clc_load_balancer_pool": 61,
    "kubernetes_config_map": 62,
    "kubernetes_horizontal_pod_autoscaler": 62,
    "kubernetes_limit_range": 62,
    "kubernetes_namespace": 62,
    "kubernetes_persistent_volume": 62,
    "kubernetes_persistent_volume_claim": 62,
    "kubernetes_pod": 62,
    "kubernetes_replication_controller": 62,
    "kubernetes_resource_quota": 62,
    "kubernetes_secret": 62,
    "kubernetes_service": 62,
    "kubernetes_service_account": 62,
    "kubernetes_storage_class": 62,
    "librato_alert": 63,
    "librato_metric": 63,
    "librato_service": 63,
    "librato_space": 63,
    "librato_space_chart": 63,
    "random_id": 64,
    "random_pet": 64,
    "random_shuffle": 64,
    "random_string": 64,
    "packet_device": 65,
    "packet_project": 65,
    "packet_ssh_key": 65,
    "packet_volume": 65,
    "packet_volume_attachment": 65,
    "mailgun_domain": 66,
    "nomad_job": 67,
    "vsphere_license": 68,
    "vsphere_datacenter": 69,
    "vsphere_folder": 69,
    "vsphere_tag": 69,
    "vsphere_tag_category": 69,
    "vsphere_distributed_port_group": 70,
    "vsphere_distributed_virtual_switch": 70,
    "vsphere_host_port_group": 70,
    "vsphere_host_virtual_switch": 70,
    "vsphere_file": 71,
    "vsphere_nas_datastore": 71,
    "vsphere_vmfs_datastore": 71,
    "vsphere_virtual_disk": 72,
    "vsphere_virtual_machine": 72,
    "vsphere_virtual_machine_snapshot": 72,
    "datadog_downtime": 73,
    "datadog_monitor": 73,
    "datadog_timeboard": 73,
    "datadog_user": 73,
    "github_branch_protection": 74,
    "github_membership": 74,
    "github_organization_webhook": 74,
    "github_repository": 74,
    "github_repository_collaborator": 74,
    "github_repository_deploy_key": 74,
    "github_repository_webhook": 74,
    "github_team": 74,
    "github_team_membership": 74,
    "github_team_repository": 74,
    "github_issue_label": 74,
    "statuscake_test": 75,
    "icinga2_checkcommand": 76,
    "icinga2_host": 76,
    "icinga2_hostgroup": 76,
    "icinga2_service": 76,
    "service_v1": 77,
    "influxdb_database": 78,
    "influxdb_user": 78,
    "influxdb_continuous_query": 78,
    "pagerduty_addon": 79,
    "pagerduty_escalation_policy": 79,
    "pagerduty_maintenance_window": 79,
    "pagerduty_schedule": 79,
    "pagerduty_service": 79,
    "pagerduty_service_integration": 79,
    "pagerduty_team": 79,
    "pagerduty_team_membership": 79,
    "pagerduty_user": 79,
    "vcd_dnat": 80,
    "vcd_firewall_rules": 80,
    "vcd_network": 80,
    "vcd_snat": 80,
    "vcd_edgegateway_vpn": 80,
    "vcd_vapp": 80,
    "vcd_vapp_vm": 80,
    "aws_api_gateway_account": 81,
    "aws_api_gateway_api_key": 81,
    "aws_api_gateway_authorizer": 81,
    "aws_api_gateway_base_path_mapping": 81,
    "aws_api_gateway_client_certificate": 81,
    "aws_api_gateway_deployment": 81,
    "aws_api_gateway_domain_name": 81,
    "aws_api_gateway_gateway_response": 81,
    "aws_api_gateway_integration": 81,
    "aws_api_gateway_integration_response": 81,
    "aws_api_gateway_method": 81,
    "aws_api_gateway_method_response": 81,
    "aws_api_gateway_method_settings": 81,
    "aws_api_gateway_model": 81,
    "aws_api_gateway_resource": 81,
    "aws_api_gateway_rest_api": 81,
    "aws_api_gateway_stage": 81,
    "aws_api_gateway_usage_plan": 81,
    "aws_api_gateway_usage_plan_key": 81,
    "aws_appautoscaling_policy": 82,
    "aws_appautoscaling_target": 82,
    "aws_athena_database": 83,
    "aws_athena_named_query": 83,
    "aws_batch_compute_environment": 84,
    "aws_batch_job_definition": 84,
    "aws_batch_job_queue": 84,
    "aws_cloudformation_stack": 85,
    "aws_cloudfront_distribution": 86,
    "aws_cloudfront_origin_access_identity": 86,
    "aws_cloudtrail": 87,
    "aws_cloudwatch_dashboard": 88,
    "aws_cloudwatch_event_rule": 88,
    "aws_cloudwatch_event_target": 88,
    "aws_cloudwatch_log_destination": 88,
    "aws_cloudwatch_log_destination_policy": 88,
    "aws_cloudwatch_log_group": 88,
    "aws_cloudwatch_log_metric_filter": 88,
    "aws_cloudwatch_log_stream": 88,
    "aws_cloudwatch_log_subscription_filter": 88,
    "aws_cloudwatch_metric_alarm": 88,
    "aws_codebuild_project": 89,
    "aws_codecommit_repository": 90,
    "aws_codecommit_trigger": 90,
    "aws_codedeploy_app": 91,
    "aws_codedeploy_deployment_config": 91,
    "aws_codedeploy_deployment_group": 91,
    "aws_codepipeline": 92,
    "aws_cognito_identity_pool": 93,
    "aws_cognito_identity_pool_roles_attachment": 93,
    "aws_cognito_user_pool": 93,
    "aws_config_config_rule": 94,
    "aws_config_configuration_recorder": 94,
    "aws_config_configuration_recorder_status": 94,
    "aws_config_delivery_channel": 94,
    "aws_dms_certificate": 95,
    "aws_dms_endpoint": 95,
    "aws_dms_replication_instance": 95,
    "aws_dms_replication_subnet_group": 95,
    "aws_dms_replication_task": 95,
    "aws_devicefarm_project": 96,
    "aws_directory_service_directory": 97,
    "aws_dx_connection": 98,
    "aws_dx_lag": 98,
    "aws_dynamodb_table": 99,
    "aws_alb": 100,
    "aws_alb_listener": 100,
    "aws_alb_listener_rule": 100,
    "aws_alb_target_group": 100,
    "aws_alb_target_group_attachment": 100,
    "aws_ami": 100,
    "aws_ami_copy": 100,
    "aws_ami_from_instance": 100,
    "aws_ami_launch_permission": 100,
    "aws_app_cookie_stickiness_policy": 100,
    "aws_autoscaling_attachment": 100,
    "aws_autoscaling_group": 100,
    "aws_autoscaling_lifecycle_hook": 100,
    "aws_autoscaling_notification": 100,
    "aws_autoscaling_policy": 100,
    "aws_autoscaling_schedule": 100,
    "aws_snapshot_create_volume_permission": 100,
    "aws_ebs_snapshot": 100,
    "aws_ebs_volume": 100,
    "aws_eip": 100,
    "aws_eip_association": 100,
    "aws_elb": 100,
    "aws_elb_attachment": 100,
    "aws_instance": 100,
    "aws_key_pair": 100,
    "aws_launch_configuration": 100,
    "aws_lb_cookie_stickiness_policy": 100,
    "aws_lb_ssl_negotiation_policy": 100,
    "aws_load_balancer_backend_server_policy": 100,
    "aws_load_balancer_listener_policy": 100,
    "aws_load_balancer_policy": 100,
    "aws_placement_group": 100,
    "aws_proxy_protocol_policy": 100,
    "aws_spot_datafeed_subscription": 100,
    "aws_spot_fleet_request": 100,
    "aws_spot_instance_request": 100,
    "aws_volume_attachment": 100,
    "aws_lb": 101,
    "aws_lb_listener": 101,
    "aws_lb_listener_rule": 101,
    "aws_lb_target_group": 101,
    "aws_lb_target_group_attachment": 101,
    "aws_ecr_lifecycle_policy": 102,
    "aws_ecr_repository": 102,
    "aws_ecr_repository_policy": 102,
    "aws_ecs_cluster": 102,
    "aws_ecs_service": 102,
    "aws_ecs_task_definition": 102,
    "aws_efs_file_system": 103,
    "aws_efs_mount_target": 103,
    "aws_elasticache_cluster": 104,
    "aws_elasticache_parameter_group": 104,
    "aws_elasticache_replication_group": 104,
    "aws_elasticache_security_group": 104,
    "aws_elasticache_subnet_group": 104,
    "aws_elastic_beanstalk_application": 105,
    "aws_elastic_beanstalk_application_version": 105,
    "aws_elastic_beanstalk_configuration_template": 105,
    "aws_elastic_beanstalk_environment": 105,
    "aws_emr_cluster": 106,
    "aws_emr_instance_group": 106,
    "aws_emr_security_configuration": 106,
    "aws_elasticsearch_domain": 107,
    "aws_elasticsearch_domain_policy": 107,
    "aws_elastictranscoder_pipeline": 108,
    "aws_elastictranscoder_preset": 108,
    "aws_glacier_vault": 109,
    "aws_iam_access_key": 110,
    "aws_iam_account_alias": 110,
    "aws_iam_account_password_policy": 110,
    "aws_iam_group": 110,
    "aws_iam_group_membership": 110,
    "aws_iam_group_policy": 110,
    "aws_iam_group_policy_attachment": 110,
    "aws_iam_instance_profile": 110,
    "aws_iam_openid_connect_provider": 110,
    "aws_iam_policy": 110,
    "aws_iam_policy_attachment": 110,
    "aws_iam_role": 110,
    "aws_iam_role_policy": 110,
    "aws_iam_role_policy_attachment": 110,
    "aws_iam_saml_provider": 110,
    "aws_iam_server_certificate": 110,
    "aws_iam_user": 110,
    "aws_iam_user_login_profile": 110,
    "aws_iam_user_policy": 110,
    "aws_iam_user_policy_attachment": 110,
    "aws_iam_user_ssh_key": 110,
    "aws_iot_certificate": 111,
    "aws_iot_policy": 111,
    "aws_inspector_assessment_target": 112,
    "aws_inspector_assessment_template": 112,
    "aws_inspector_resource_group": 112,
    "aws_kinesis_stream": 113,
    "aws_kinesis_firehose_delivery_stream": 114,
    "aws_kms_alias": 115,
    "aws_kms_key": 115,
    "aws_lambda_alias": 116,
    "aws_lambda_event_source_mapping": 116,
    "aws_lambda_function": 116,
    "aws_lambda_permission": 116,
    "aws_lightsail_domain": 117,
    "aws_lightsail_instance": 117,
    "aws_lightsail_key_pair": 117,
    "aws_lightsail_static_ip": 117,
    "aws_lightsail_static_ip_attachment": 117,
    "aws_opsworks_application": 118,
    "aws_opsworks_custom_layer": 118,
    "aws_opsworks_ganglia_layer": 118,
    "aws_opsworks_haproxy_layer": 118,
    "aws_opsworks_instance": 118,
    "aws_opsworks_java_app_layer": 118,
    "aws_opsworks_memcached_layer": 118,
    "aws_opsworks_mysql_layer": 118,
    "aws_opsworks_nodejs_app_layer": 118,
    "aws_opsworks_permission": 118,
    "aws_opsworks_php_app_layer": 118,
    "aws_opsworks_rails_app_layer": 118,
    "aws_opsworks_rds_db_instance": 118,
    "aws_opsworks_stack": 118,
    "aws_opsworks_static_web_layer": 118,
    "aws_opsworks_user_profile": 118,
    "aws_db_event_subscription": 119,
    "aws_db_instance": 119,
    "aws_db_option_group": 119,
    "aws_db_parameter_group": 119,
    "aws_db_security_group": 119,
    "aws_db_snapshot": 119,
    "aws_db_subnet_group": 119,
    "aws_rds_cluster": 119,
    "aws_rds_cluster_instance": 119,
    "aws_rds_cluster_parameter_group": 119,
    "aws_redshift_cluster": 120,
    "aws_redshift_parameter_group": 120,
    "aws_redshift_security_group": 120,
    "aws_redshift_subnet_group": 120,
    "aws_waf_byte_match_set": 121,
    "aws_waf_ipset": 121,
    "aws_waf_rule": 121,
    "aws_waf_rate_based_rule": 121,
    "aws_waf_size_constraint_set": 121,
    "aws_waf_sql_injection_match_set": 121,
    "aws_waf_web_acl": 121,
    "aws_waf_xss_match_set": 121,
    "aws_wafregional_byte_match_set": 122,
    "aws_wafregional_ipset": 122,
    "aws_route53_delegation_set": 123,
    "aws_route53_health_check": 123,
    "aws_route53_record": 123,
    "aws_route53_zone": 123,
    "aws_route53_zone_association": 123,
    "aws_s3_bucket": 124,
    "aws_s3_bucket_notification": 124,
    "aws_s3_bucket_object": 124,
    "aws_s3_bucket_policy": 124,
    "aws_ses_active_receipt_rule_set": 125,
    "aws_ses_domain_identity": 125,
    "aws_ses_domain_dkim": 125,
    "aws_ses_receipt_filter": 125,
    "aws_ses_receipt_rule": 125,
    "aws_ses_receipt_rule_set": 125,
    "aws_ses_configuration_set": 125,
    "aws_ses_event_destination": 125,
    "aws_ses_template": 125,
    "aws_servicecatalog_portfolio": 126,
    "aws_sfn_activity": 127,
    "aws_sfn_state_machine": 127,
    "aws_simpledb_domain": 128,
    "aws_sns_topic": 129,
    "aws_sns_topic_policy": 129,
    "aws_sns_topic_subscription": 129,
    "aws_ssm_activation": 130,
    "aws_ssm_association": 130,
    "aws_ssm_document": 130,
    "aws_ssm_maintenance_window": 130,
    "aws_ssm_maintenance_window_target": 130,
    "aws_ssm_maintenance_window_task": 130,
    "aws_ssm_patch_baseline": 130,
    "aws_ssm_patch_group": 130,
    "aws_ssm_parameter": 130,
    "aws_ssm_resource_data_sync": 130,
    "aws_sqs_queue": 131,
    "aws_sqs_queue_policy": 131,
    "aws_customer_gateway": 132,
    "aws_default_network_acl": 132,
    "aws_default_route_table": 132,
    "aws_default_security_group": 132,
    "aws_default_subnet": 132,
    "aws_default_vpc": 132,
    "aws_default_vpc_dhcp_options": 132,
    "aws_egress_only_internet_gateway": 132,
    "aws_flow_log": 132,
    "aws_internet_gateway": 132,
    "aws_main_route_table_association": 132,
    "aws_nat_gateway": 132,
    "aws_network_acl": 132,
    "aws_network_acl_rule": 132,
    "aws_network_interface": 132,
    "aws_network_interface_attachment": 132,
    "aws_route": 132,
    "aws_route_table": 132,
    "aws_route_table_association": 132,
    "aws_security_group": 132,
    "aws_network_interface_sg_attachment": 132,
    "aws_security_group_rule": 132,
    "aws_subnet": 132,
    "aws_vpc": 132,
    "aws_vpc_dhcp_options": 132,
    "aws_vpc_dhcp_options_association": 132,
    "aws_vpc_endpoint": 132,
    "aws_vpc_endpoint_route_table_association": 132,
    "aws_vpc_peering_connection": 132,
    "aws_vpc_peering_connection_accepter": 132,
    "aws_vpn_connection": 132,
    "aws_vpn_connection_route": 132,
    "aws_vpn_gateway": 132,
    "aws_vpn_gateway_attachment": 132,
    "aws_vpn_gateway_route_propagation": 132,
    "profitbricks_datacenter": 133,
    "profitbricks_firewall": 133,
    "profitbricks_group": 133,
    "profitbricks_ipblock": 133,
    "profitbricks_ipfailover": 133,
    "profitbricks_lan": 133,
    "profitbricks_loadbalancer": 133,
    "profitbricks_nic": 133,
    "profitbricks_server": 133,
    "profitbricks_share": 133,
    "profitbricks_snapshot": 133,
    "profitbricks_user": 133,
    "profitbricks_volume": 133,
    "cobbler_distro": 134,
    "cobbler_kickstart_file": 134,
    "cobbler_repo": 134,
    "cobbler_profile": 134,
    "cobbler_snippet": 134,
    "cobbler_system": 134,
    "ns1_zone": 135,
    "ns1_record": 135,
    "ns1_monitoringjob": 135,
    "ns1_notifylist": 135,
    "ns1_datasource": 135,
    "ns1_datafeed": 135,
    "ns1_apikey": 135,
    "ns1_team": 135,
    "ns1_user": 135,
    "digitalocean_certificate": 136,
    "digitalocean_domain": 136,
    "digitalocean_droplet": 136,
    "digitalocean_firewall": 136,
    "digitalocean_floating_ip": 136,
    "digitalocean_loadbalancer": 136,
    "digitalocean_record": 136,
    "digitalocean_ssh_key": 136,
    "digitalocean_tag": 136,
    "digitalocean_volume": 136,
    "logicmonitor_collectorgroup": 137,
    "logicmonitor_device": 137,
    "logicmonitor_devicegroup": 137,
    "heroku_addon": 138,
    "heroku_addon_attachment": 138,
    "heroku_app": 138,
    "heroku_app_feature": 138,
    "heroku_cert": 138,
    "heroku_domain": 138,
    "heroku_drain": 138,
    "heroku_pipeline": 138,
    "heroku_pipeline_coupling": 138,
    "heroku_space": 138,
    "postgresql_database": 139,
    "postgresql_extension": 139,
    "postgresql_role": 139,
    "postgresql_schema": 139,
    "ovh_vrack_publiccloud_attachment": 140,
    "ovh_publiccloud_private_network": 141,
    "ovh_publiccloud_private_network_subnet": 141,
    "ovh_publiccloud_user": 141,
    "scaleway_ip": 142,
    "scaleway_server": 142,
    "scaleway_security_group": 142,
    "scaleway_security_group_rule": 142,
    "scaleway_volume": 142,
    "scaleway_volume_attachment": 142,
    "alicloud_disk": 143,
    "alicloud_disk_attachment": 143,
    "alicloud_instance": 143,
    "alicloud_eip": 143,
    "alicloud_eip_association": 143,
    "alicloud_slb": 144,
    "alicloud_slb_attachment": 144,
    "alicloud_vpc": 145,
    "alicloud_vswitch": 145,
    "alicloud_route_entry": 145,
    "alicloud_security_group": 145,
    "alicloud_security_group_rule": 145,
    "alicloud_nat_gateway": 145,
    "alicloud_rds": 146,
    "alicloud_ess_scaling_group": 147,
    "alicloud_ess_scaling_configuration": 147,
    "alicloud_ess_scaling_rule": 147,
    "alicloud_ess_schedule": 147,
    "grafana_alert_notification": 148,
    "grafana_dashboard": 148,
    "grafana_data_source": 148,
    "opsgenie_team": 149,
    "opsgenie_user": 149,
    "cloudscale_server": 150,
    "cloudscale_floating_ip": 150,
    "file": 151,
    "dns_a_record_set": 152,
    "dns_aaaa_record_set": 152,
    "dns_cname_record": 152,
    "dns_ptr_record": 152,
    "gitlab_deploy_key": 153,
    "gitlab_group": 153,
    "gitlab_label": 153,
    "gitlab_project_hook": 153,
    "gitlab_project": 153,
    "gitlab_user": 153,
    "mysql_database": 154,
    "mysql_grant": 154,
    "mysql_user": 154,
    "rundeck_project": 155,
    "rundeck_private_key": 155,
    "rundeck_public_key": 155,
    "rundeck_job": 155,
    "triton_key": 156,
    "triton_firewall_rule": 156,
    "triton_vlan": 156,
    "triton_fabric": 156,
    "triton_machine": 156,
    "docker_container": 157,
    "docker_image": 157,
    "docker_network": 157,
    "docker_volume": 157,
    "circonus_check": 158,
    "circonus_contact_group": 158,
    "circonus_graph": 158,
    "circonus_metric": 158,
    "circonus_metric_cluster": 158,
    "circonus_rule_set": 158,
    "tls_private_key": 159,
    "tls_self_signed_cert": 159,
    "tls_locally_signed_cert": 159,
    "tls_cert_request": 159,
    "dnsimple_record": 160,
    "cloudstack_affinity_group": 161,
    "cloudstack_disk": 161,
    "cloudstack_egress_firewall": 161,
    "cloudstack_firewall": 161,
    "cloudstack_instance": 161,
    "cloudstack_ipaddress": 161,
    "cloudstack_loadbalancer_rule": 161,
    "cloudstack_network": 161,
    "cloudstack_network_acl": 161,
    "cloudstack_network_acl_rule": 161,
    "cloudstack_nic": 161,
    "cloudstack_port_forward": 161,
    "cloudstack_private_gateway": 161,
    "cloudstack_secondary_ipaddress": 161,
    "cloudstack_security_group": 161,
    "cloudstack_security_group_rule": 161,
    "cloudstack_ssh_keypair": 161,
    "cloudstack_static_nat": 161,
    "cloudstack_static_route": 161,
    "cloudstack_template": 161,
    "cloudstack_vpc": 161,
    "cloudstack_vpn_gateway": 161,
    "cloudstack_vpn_customer_gateway": 161,
    "cloudstack_vpn_connection": 161,
    "template_dir": 162,
    "rancher_certificate": 163,
    "rancher_environment": 163,
    "rancher_host": 163,
    "rancher_registration_token": 163,
    "rancher_registry_credential": 163,
    "rancher_registry": 163,
    "rancher_secret": 163,
    "rancher_stack": 163,
    "": 10000,
    "provider": 10000,
    "meta": 10000,
    "var": 10001,
    "output": 10002
}